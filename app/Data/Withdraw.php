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
        return $this->db()->get();
    }

    public function getByIdUser($id_user)
    {
        return $this->db()->where('id_user', $id_user)->get();
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
