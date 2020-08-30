<?php

class Test
{
    public function upload(Request $request, $filename = '')
    {
        \Log::debug('test');
        $dates = [];
        if (!empty($filename)) {
            $dates = $this->getDates(storage_path('app/files/' . $filename));
// $this->import($filename, []);
// return redirect()->route('admin.dashboard')->withFlashSuccess('File queued for upload!');
        }
        $data_status = \DB::table('datamaster')
            ->select(\DB::raw('Month, count(*) as jml'))
            ->groupBy('Month')
            ->orderby('Month', 'desc')
            ->get();

        return view('backend.upload')->with(
            compact('dates', 'filename', 'data_status')
        );
    }
    public function getDates($filename){
        $inputFileName = $filename;
        $filterSubset = new MyReadFilter();
        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader('Xlsx');
        $reader->setReadFilter($filterSubset);
        $spreadsheet = $reader->load($inputFileName);
        $worksheet = $spreadsheet->getActiveSheet();
        $rows = [];
        $errors = 0;
        foreach ($worksheet->getRowIterator() AS $row) {
            try {
                $cellIterator = $row->getCellIterator();
                $cellIterator->setIterateOnlyExistingCells(FALSE); // This loops through all cells,
                $cells = 0;
                foreach ($cellIterator as $cell) {
                    if($cell->getValue())
                        try {
                            $cells = \PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($cell->getValue());
                        } catch (\Throwable $th) {
                            $cells = strtotime($cells);
                            if($cells < strtotime(date('2017-01-01')))
                                throw $th;
                            else
                                $cells = new \DateTime(date('Y-m-01', $cells));
                        }
                }
                $tgl = $cells->format('Y-m-01');
                try {
                    $rows[$tgl] = $rows[$tgl] + 1;
                } catch (\Throwable $th) {
                    $rows[$tgl] = 1;
                }
            } catch (\Throwable $th) {
                $errors++;
            }
        }
        ksort($rows);
        // return $rows;
        return [
            'data' => $rows,
            'errors' => $errors
        ];
    }

    public function doUpload(Request $request)
    {
// dd($request->file('file')->getMimeType(),$request->file('file')->getClientOriginalExtension() );
        if ($request->has('filename')) {
            $validatedData = $request->validate(
                [
                    'months' => 'required|min:1|max:3',
                ],
                [
                    'required' => 'The :attribute field is required.',
                    'min' => 'Dates cannot be empty!',
                    'max' => 'Please choose max 3 dates to avoid import failure!',
                ]
            );
            $dates = $request->input('months');
            $this->import($request->input('filename'), $dates);
            return redirect()->route('admin.upload', $request->input('filename'))->withFlashSuccess('Data uploaded!');
        }
        $validatedData = $request->validate([
            'file' => 'required|file',
        ]);
        $path = 'app/' . $request->file->store('files');
        return redirect()->route('admin.upload', basename($path));
    }

    public function import($filename, $dates)
    {
        ini_set('max_execution_time', 300);
        $file = storage_path('app/files/' . $filename);
// $dates = $this->getDates($file);
        \Log::debug('Import file ' . $file . ', dates: ' . implode(', ', $dates));
        foreach ($dates as $dt) {
            \App\Models\Master\DataMaster::whereDate('Month', $dt)->delete();
        }
// Excel::import(new DataImport($dates), $file, null, \Maatwebsite\Excel\Excel::XLSX);
        (new DataImport($dates))->queue($file, null, \Maatwebsite\Excel\Excel::XLSX)->chain([
            new \App\Jobs\SyncMaster(),
        ]);

        return true;
    }
