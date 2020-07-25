<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AdminAuth extends Model
{
    private function db()
    {
        return DB::table('t_admin');
    }

    public function tryLogin($email, $pass)
    {
        if (count($this->db()->where('email', $email)->where('password', $pass)->get()) > 0) {
            return true;
        }
        return false;
    }
}
