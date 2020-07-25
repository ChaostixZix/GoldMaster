<?php

namespace App\Http\Controllers\Admin;

use App\Data\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Game/Game', [
            'game' => function () {
                return (new Category())->getAll();
            }
        ]);
    }

    public function delete($id)
    {
        $do = (new Category())->hapus($id);
        return redirect(route('admin.game'))->with('success', 'Berhasil menghapus game');
    }

    public function tambah(Request $req)
    {
        $do = (new Category())->tambah($req->get('kategori'));
        return redirect(route('admin.game'))->with('success', 'Berhasil menambah game');
    }
}
