<?php

namespace App\Http\Controllers\User\Transaction;

use App\Http\Controllers\Controller;
use App\Transaction\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class HistoryController extends Controller
{
    public function index()
    {
        return Inertia::render('User/History/History', [
            'orders' => function () {
                $get = (new Order())->getByUser(Session::get('id_user'));
                $get2 = [];
                foreach ($get as $g)
                {
                    $to = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', date('Y-m-d H:s:i'));
                    $from = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $g->created_at);
                    $diff = $to->diffInMinutes($from);
                    $g->diff = $diff;
                    $get2[] = $g;
                }


                return $get2;
            }
        ]);
    }

    public function addOrder(Request $request)
    {
        $req = $request->all();
        $req['tgl_pesan'] = date("Y-m-d");
        $req['id_order'] = rand(100000000, 9999999);
//        $req['status_o'] = 'aktif';
        $do = (new Order())->insertRaw($req);
        return redirect(route('user.history'));
    }

    public function uploadFoto(Request $request)
    {
        $data = $request->all();
        $oldmask = umask(0);
        $files = $data['file'];

        foreach ($files as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            $tujuan_upload = 'data_file/uploadfoto/' . $data['id_order'];
            if (!file_exists($tujuan_upload)) {
                mkdir($tujuan_upload, 0777, true);
                umask($oldmask);
            }
            Image::make($file)->save($tujuan_upload . '/' . $name);
            $data['file'][] = $tujuan_upload . '/' . $name;
        }
        $data['file'] = json_decode($data['file']);
        $do = (new Order())->updateRaw($data['id_order'], $data);
        return redirect()->back();
    }

    public function uploadFoto1(Request $request)
    {
        $data = $request->all();

        foreach ($data['photo'] as $file) {
            $tujuan_upload = 'data_file/' . Session::get('id_user');
            $name = $file->getClientOriginalName();
            $file->move($tujuan_upload, $file->getClientOriginalName());
            $datafile[] = $tujuan_upload . '/' . $file->getClientOriginalName();
        }
        $datafile = json_encode($datafile);
        $do = (new Order())->updateRaw($data['id_order'], ['file' => $datafile]);
        return redirect()->back();
    }

    public function cancel($id)
    {
        $do = (new Order())->cancel($id);
        return redirect(route('user.history'));
    }
}
