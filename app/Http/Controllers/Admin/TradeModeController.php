<?php

namespace App\Http\Controllers\Admin;

use App\Data\TradeMode;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TradeModeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/TradeMode/TradeMode', [
            'trademode' => function () {
                return (new TradeMode())->getAll();
            }
        ]);
    }

    public function delete($id)
    {
        $do = (new TradeMode())->hapus($id);
        return redirect(route('admin.trademode'))->with('success', 'Berhasil menghapus trade mode');
    }

    public function tambah(Request $req)
    {
        $do = (new TradeMode())->tambah($req->get('pengiriman'));
        return redirect(route('admin.trademode'))->with('success', 'Berhasil menambah trade mode');
    }
}
