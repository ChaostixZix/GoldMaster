<?php

namespace App\Data;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TradeMode extends Model
{
    private function db()
    {
        return DB::table('t_pengiriman');
    }

    public function getAll()
    {
        return $this->db()->get();
    }

    public function hapus($id)
    {
        return $this->db()->where('id_pengiriman', $id)->delete();
    }

    public function tambah($kategori)
    {
        return $this->db()->insert([
            'pengiriman' => $kategori
        ]);
    }
}
