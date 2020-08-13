<?php

namespace App\Data;

use App\Events\ItemEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Category extends Model
{
    private function db()
    {
        return DB::table('t_kategori');
    }

    public function getAll()
    {
        return $this->db()->get();
    }

    public function hapus($id)
    {
        $this->db()->where('id_kategori', $id)->delete();
        event(new ItemEvents('Test'));
        return true;
    }

    public function tambah($kategori)
    {
        $this->db()->insert([
            'kategori' => $kategori
        ]);
        event(new ItemEvents('Test'));
        return true;
    }
}
