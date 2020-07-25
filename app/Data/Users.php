<?php

namespace App\Data;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Users extends Model
{
    private function db()
    {
        return DB::table('t_users');
    }

    public function getAll()
    {
        return $this->db()->get();
    }
}
