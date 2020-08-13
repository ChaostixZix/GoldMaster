<?php

namespace App\Data;

use App\Events\ItemEvents;
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
         $this->db()->where('id_pengiriman', $id)->delete();
        event(new ItemEvents('test'));
        return true;
    }

    public function tambah($kategori)
    {
         $this->db()->insert([
            'pengiriman' => $kategori
        ]);
        event(new ItemEvents('test'));
        return true;

    }
}
