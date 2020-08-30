<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Forgot extends Model
{
    private function db()
    {
        return DB::table('forgot');
    }
    public function getCode($id_user)
    {
        if($this->db()->where('id_user', $id_user)->exists())
        {
            return $this->db()->where('id_user', $id_user)->first()->code;
        }
        $code = rand(11111, 99999);
        $this->db()->insert(['id_user' => $id_user, 'code' => $code]);
        return  $code;
    }
    public function getByCode($code)
    {
        if($this->db()->where('code', $code)->exists())
        {
            return $this->db()->where('code', $code)->first()->id_user;
        }
        return  false;
    }
    public function deleteRaw($id_user)
    {
        return $this->db()->where('id_user', $id_user)->delete();
    }
}
