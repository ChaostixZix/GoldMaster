<?php

namespace App\Transaction;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class History extends Model
{
    private function db()
    {
        return DB::table('t_order');
    }

    public function getAll()
    {
        return $this->db()->get();
    }

    public function getByUser($id_user)
    {
        return $this->db()->where('id_user', $id_user)->get();
    }
}
