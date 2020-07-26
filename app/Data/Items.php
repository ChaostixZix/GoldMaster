<?php

namespace App\Data;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Items extends Model
{
    private function db()
    {
        return DB::table('t_items');
    }

    public function getAll()
    {
        return $this->db()
            ->leftJoin('t_server', 't_items.id_item', '=', 't_server.id_item')
            ->leftJoin('t_kategori', 't_items.id_kategori', '=', 't_kategori.id_kategori')
            ->leftJoin('t_pengiriman', 't_items.id_pengiriman', '=', 't_pengiriman.id_pengiriman')
            ->get();
    }

    public function updateRaw($id, array $update)
    {
        return $this->db()->where('id_items', $id)->update($update);
    }

    public function insertRaw(array $insert)
    {
        return $this->db()->insert($insert);
    }
}
