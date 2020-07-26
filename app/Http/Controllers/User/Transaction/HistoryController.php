<?php

namespace App\Http\Controllers\User\Transaction;

use App\Http\Controllers\Controller;
use App\Transaction\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class HistoryController extends Controller
{
    public function index()
    {
        return Inertia::render('User/History/History', [
            'orders' => function()
            {
                return (new Order())->getByUser(Session::get('id_user'));
            }
        ]);
    }

    public function addOrder(Request $request)
    {
        $req = $request->all();
        $req['tgl_pesan'] = date("Y-m-d");
        $req['id_order'] = rand(100000000, 9999999);
        $do = (new Order())->insertRaw($req);
        return redirect(route('user.history'));
    }

    public function cancel($id)
    {
        $do = (new Order())->cancel($id);
        return redirect(route('user.history'));
    }
}
