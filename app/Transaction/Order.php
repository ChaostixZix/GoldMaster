<?php

namespace App\Transaction;

use App\Data\Items;
use App\Events\ItemEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    private function db()
    {
        return DB::table('t_order');
    }

    public function getAllNotCancelled()
    {
        return $this->db()
            ->where('status_o', '=', 'aktif')
            ->get();
    }

    public function getAll()
    {
        return $this->db()
            ->leftJoin('t_users', 't_users.id_user', '=', 't_order.id_user')
            ->leftJoin('t_items', 't_items.id_items', '=', 't_order.id_items')
            ->leftJoin('t_server', 't_items.id_item', '=', 't_server.id_item')
            ->leftJoin('t_kategori', 't_items.id_kategori', '=', 't_kategori.id_kategori')
            ->leftJoin('t_pengiriman', 't_items.id_pengiriman', '=', 't_pengiriman.id_pengiriman')
            ->get();
    }

    public function getByUser($id_user)
    {
        return
            $this->db()->where('id_user', $id_user)
                ->leftJoin('t_items', 't_items.id_items', '=', 't_order.id_items')
                ->leftJoin('t_server', 't_items.id_item', '=', 't_server.id_item')
                ->leftJoin('t_kategori', 't_items.id_kategori', '=', 't_kategori.id_kategori')
                ->leftJoin('t_pengiriman', 't_items.id_pengiriman', '=', 't_pengiriman.id_pengiriman')
            ->get();
    }
    public function getById($id)
    {
        return
            $this->db()->where('id_order', $id)
                ->leftJoin('t_items', 't_items.id_items', '=', 't_order.id_items')
                ->leftJoin('t_server', 't_items.id_item', '=', 't_server.id_item')
                ->leftJoin('t_kategori', 't_items.id_kategori', '=', 't_kategori.id_kategori')
                ->leftJoin('t_pengiriman', 't_items.id_pengiriman', '=', 't_pengiriman.id_pengiriman')
                ->get();
    }

    public function cancel($id)
    {
        $get = $this->getById($id)[0];
        $butuh = (new Items())->getById($get->id_items)[0]->butuh;
        (new Items())->updateRaw($get->id_items, ['butuh' => $butuh + $get->quantity]);
         $this->db()->where('id_order', $id)->delete();
        event(new ItemEvents('test'));
        return true;
    }

    public function insertRaw(array $insert)
    {
        $insert['created_at'] = date('Y-m-d H:s:i');
         $this->db()->insert($insert);
        event(new ItemEvents('test'));
        return true;
    }

    public function updateRaw($id, array $update)
    {
         $this->db()->where('id_order', $id)->update($update);
        event(new ItemEvents('test'));
        return true;
    }

}
