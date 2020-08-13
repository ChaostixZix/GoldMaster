<?php

namespace App\Http\Controllers\Admin;

use App\Data\Withdraw;
use App\Events\ItemEvents;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WithdrawController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Withdraw/Withdraw',
        [
            'requests' => function()
            {
                return (new Withdraw())->getAll();
            }
        ]);
    }

    public function update(Request $request)
    {
        $req = $request->all();
        $id = $req['id'];
        $do = (new Withdraw())->updateRaw($id, $req);

        return redirect()->back();
    }
    public function delete($id)
    {
        $do = (new Withdraw())->hapus($id);

        return redirect()->back();
    }
}
