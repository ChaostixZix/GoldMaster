<?php

namespace App\Http\Controllers\Admin;

use App\Data\Category;
use App\Data\Items;
use App\Data\MemberStok;
use App\Data\Server;
use App\Data\TradeMode;
use App\Events\ItemEvents;
use App\Events\Message;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Items/Items', [
            'items' => function () {
                return (new Items())->getAll();
            },
            'server' => function () {
                return (new Server())->getAll();
            },
            'game' => function () {
                return (new Category())->getAll();
            },
            'trademode' => function () {
                return (new TradeMode())->getAll();
            }
        ]);
    }


    public function update(Request $request)
    {
        $req = $request->all();

        $do = (new Items())->updateRaw($req['id_items'], $req);
        return redirect(route('admin.items'));
    }

    public function insert(Request $request)
    {
        $req = $request->all();
        $do = (new Items())->insertRaw($req);
        return redirect(route('admin.items'));
    }

    public function delete($id)
    {
        $do = (new Items())->hapus($id);

        return redirect(route('admin.items'));
    }
}
