<?php

namespace App\Data;

use App\Events\ItemEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Server extends Model
{
    private function db()
    {
        return DB::table('t_server');
    }

    public function getAll()
    {
        return $this->db()->get();
    }

    public function hapus($id)
    {
         $this->db()->where('id_item', $id)->delete();
        event(new ItemEvents('test'));
        return true;
    }

    public function tambah($kategori)
    {
         $this->db()->insert([
            'server' => $kategori
        ]);
        event(new ItemEvents('test'));
        return true;
    }
}
