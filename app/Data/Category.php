<?php

namespace App\Data;

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
        return $this->db()->where('id_kategori', $id)->delete();
    }

    public function tambah($kategori)
    {
        return $this->db()->insert([
            'kategori' => $kategori
        ]);
    }
}
