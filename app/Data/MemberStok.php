<?php

namespace App\Data;

use App\Events\ItemEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MemberStok extends Model
{
    private function db()
    {
        return DB::table('t_stok');
    }

    public function getAll()
    {
        return $this->db()
            ->leftJoin('t_users', 't_stok.id_user', '=', 't_users.id_user')
            ->leftJoin('t_server', 't_stok.id_item', '=', 't_server.id_item')
            ->leftJoin('t_kategori', 't_stok.id_kategori', '=', 't_kategori.id_kategori')
            ->get();
    }

    public function getMatching($server, $kategori)
    {
        return $this->db()
            ->where([
                't_stok.id_item' => $server,
                't_stok.id_kategori' => $kategori
            ])
            ->leftJoin('t_users', 't_stok.id_user', '=', 't_users.id_user')
            ->leftJoin('t_server', 't_stok.id_item', '=', 't_server.id_item')
            ->leftJoin('t_kategori', 't_stok.id_kategori', '=', 't_kategori.id_kategori')
            ->get();
    }

    public function getByUser($id)
    {
        return $this->db()
            ->where('t_stok.id_user', $id)
            ->leftJoin('t_users', 't_stok.id_user', '=', 't_users.id_user')
            ->leftJoin('t_server', 't_stok.id_item', '=', 't_server.id_item')
            ->leftJoin('t_kategori', 't_stok.id_kategori', '=', 't_kategori.id_kategori')
            ->get();
    }

    public function getById($id)
    {
        return $this->db()->where('id_stock', $id)->get();
    }

    public function getByServerAndGame($id_item, $id_kategori)
    {
        return $this->db()->where([
            'id_item' => $id_item,
            'id_kategori' => $id_kategori
        ])->get();
    }

    public function ubah($id, array $update)
    {
          date_default_timezone_set('Asia/Hong_Kong');
        $update['updated_at'] = date('Y-m-d');
         $this->db()->where('id_stock', $id)->update($update);
        event(new ItemEvents('test'));
        return true;
    }

    public function insertRaw(array $insert)
    {
          date_default_timezone_set('Asia/Hong_Kong');
        $insert['updated_at'] = date('Y-m-d');
         $this->db()->insert($insert);
        event(new ItemEvents('test'));
        return true;
    }

    public function hapus($id)
    {
         $this->db()->where('id_stock', $id)->delete();
        event(new ItemEvents('test'));
        return true;
    }

    public function getByUserId($id_user)
    {
        return $this->db()->where('id_user', $id_user)->get();
    }
}
