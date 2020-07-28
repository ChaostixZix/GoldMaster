<?php

namespace App\Http\Controllers\User\Transaction;

use App\Data\Users;
use App\Data\Withdraw;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class WithdrawController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Withdraw/Withdraw', [
            'requests' => function () {
                return (new Withdraw())->getByIdUser(Session::get('id_user'));
            }
        ]);
    }

    public function request(Request $request)
    {
        $data = $request->all();
        $data['id_user'] = Session::get('id_user');
        $saldo = (new Users())->getById(Session::get('id_user'))[0]->saldo;
        (new Users())->updateRaw(Session::get('id_user'), ['saldo' => $saldo - $data['dollar']]);
        $do = (new Withdraw())->insertRaw($data);
        return redirect()->back();
    }

}
