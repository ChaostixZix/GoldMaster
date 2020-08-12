<?php

namespace App\Http\Controllers\Admin;

use App\Data\Items;
use App\Data\Users;
use App\Events\ItemEvents;
use App\Http\Controllers\Controller;
use App\Transaction\Order;
use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Order/Order', [
            'order' => function () {
                return (new Order())->getAll();
            }
        ]);
    }

    public function update(Request $request)
    {
        $req = $request->all();
        if($req['status_o'] === 'done')
        {
            $order = (new Order())->getById($req['id_order'])[0];
            $user = (new Users())->getById($order->id_user)[0];
            $items = (new Items())->getById($order->id_items)[0];
            (new Users())->updateRaw($order->id_user, ['saldo' => $user->saldo + $order->price]);
            (new Items())->updateRaw($order->id_items, ['butuh' => $items->butuh - $order->quantity]);
        }
        $do = (new Order())->updateRaw($req['id_order'], $req);
        event(new ItemEvents('Test'));
        return redirect()->back();
    }

    public function delete($id)
    {
        $do = (new Order())->cancel($id);
        event(new ItemEvents('Test'));
        return redirect()->back();
    }

}
