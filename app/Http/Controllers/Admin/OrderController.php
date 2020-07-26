<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Transaction\Order;
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
        $do = (new Order())->updateRaw($req['id_order'], $req);
        return redirect()->back();
    }

}
