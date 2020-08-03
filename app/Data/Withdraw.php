<?php

namespace App\Data;

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
            ->get();
    }

    public function getByIdUser($id_user)
    {
        return $this->db()->where('withdraw.id_user', $id_user)
            ->leftJoin('t_users', 't_users.id_user', '=', 'withdraw.id_user')
            ->get();
    }
    public function hapus($id)
    {
        return $this->db()->where('id', $id)->delete();
    }
    public function updateRaw($id, array $update)
    {
        return $this->db()->where('id', $id)->update($update);
    }
    public function insertRaw(array $insert)
    {
        return $this->db()->insert($insert);
    }
}
