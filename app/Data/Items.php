<?php

namespace App\Data;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Items extends Model
{
    private function db()
    {
        return DB::table('t_items');
    }

    public function getAll()
    {
        return $this->db()->get();
    }
}
