<?php

namespace App\Http\Controllers\Admin;

use App\Data\Category;
use App\Data\MemberStok;
use App\Data\Server;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberStockController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/MemberStock/MemberStock', [
            'stocks' => function () {
                return (new MemberStok())->getAll();
            },
            'server' => function () {
                return (new Server())->getAll();
            },
            'game' => function () {
                return (new Category())->getAll();
            },
        ]);
    }

    public function edit($id, Request $request)
    {
        $do = (new MemberStok())->ubah($id, $request->all());
        return redirect()->back();
    }

    public function delete($id)
    {
        $do = (new MemberStok())->hapus($id);
        return redirect()->back();
    }
}
