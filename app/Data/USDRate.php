<?php

namespace App\Data;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class USDRate extends Model
{
    private function db()
    {
        return DB::table('usdrate');
    }

    public function changeIdr($idr)
    {
        return $this->db()->where('countryCode', 'idr')->update(['price' => $idr]);
    }

    public function getIdr()
    {
        return $this->db()->where('countryCode', 'idr')->get()[0];
    }
}
