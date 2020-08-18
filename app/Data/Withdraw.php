<?php

namespace App\Data;

use App\Events\ItemEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Withdraw extends Model
{
    private function db()
    {
        return DB::table('withdraw');
    }

    public function getAll()
    {
        return $this->db()
            ->leftJoin('t_users', 't_users.id_user', '=', 'withdraw.id_user')
            ->orderBy('withdraw.id', 'desc')
            ->get();
    }

    public function getByIdUser($id_user)
    {
        return $this->db()->where('withdraw.id_user', $id_user)
            ->leftJoin('t_users', 't_users.id_user', '=', 'withdraw.id_user')
            ->orderBy('withdraw.id', 'desc')
            ->get();
    }
    public function hapus($id)
    {
         $this->db()->where('id', $id)->delete();
        event(new ItemEvents('test'));
        return true;
    }
    public function updateRaw($id, array $update)
    {
         $this->db()->where('id', $id)->update($update);
        event(new ItemEvents('test'));
        return true;
    }
    public function insertRaw(array $insert)
    {
         $this->db()->insert($insert);
        event(new ItemEvents('test'));
        return true;
    }
}
