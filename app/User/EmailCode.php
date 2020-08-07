<?php

namespace App\User;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class EmailCode extends Model
{
    private function db()
    {
        return DB::table('emailcode');
    }

    public function getCode($id_user)
    {
        $get = $this->db()->where('id_user', $id_user)->get();
        if(count($get) > 0)
        {
            return $get[0]->code;
        }
        $rand = rand(10000, 99999);
        $this->db()->insert(['id_user' => $id_user, 'code' => $rand]);
        return $rand;
    }

    public function deleteCode($id_user, $code)
    {
        return $this->db()->where([
            'id_user' => $id_user,
            'code' => $code
        ])->delete();
    }
}
