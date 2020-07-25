<?php

namespace App\User;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UserAuth extends Model
{
    private function db()
    {
        return DB::table('t_users');
    }

    public function get($email)
    {
        return $this->db()->where('email', $email)->get()[0];
    }
    public function tryLogin($email, $pass)
    {
        $get = $this->db()->where('email', $email)->get();
        if(count($get) > 0)
        {
            if(password_verify($pass, $get[0]->password))
            {
                return true;
            }
        }
        return false;
    }
}
