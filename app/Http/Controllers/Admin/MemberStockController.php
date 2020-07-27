<?php

namespace App\Http\Controllers\Admin;

use App\Data\MemberStok;
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
            }
        ]);
    }

    public function delete($id)
    {
        $do = (new MemberStok())->hapus($id);
        return redirect()->back();
    }
}
