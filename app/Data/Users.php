<?php

namespace App\Data;

use App\Events\ItemEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Users extends Model
{
    private function db()
    {
        return DB::table('t_users');
    }

    public function cekEmail($email)
    {
        return $this->db()->where('email', $email)->exists();
    }

    public function getAll()
    {
        return $this->db()->get();
    }

    public function getById($id)
    {
        return $this->db()->where('id_user', $id)->get();
    }
    public function getByEmail($email)
    {
        return $this->db()->where('email', $email)->get();
    }
    public function updateRaw($id, array $update)
    {
         $this->db()->where('id_user', $id)->update($update);
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
