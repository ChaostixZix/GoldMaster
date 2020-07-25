<?php

namespace App\Http\Controllers\Admin;

use App\Data\Server;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServerController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Server/Server', [
            'server' => function () {
                return (new Server())->getAll();
            }
        ]);
    }

    public function delete($id)
    {
        $do = (new Server())->hapus($id);
        return redirect(route('admin.server'))->with('success', 'Berhasil menghapus server');
    }

    public function tambah(Request $req)
    {
        $do = (new Server())->tambah($req->get('server'));
        return redirect(route('admin.server'))->with('success', 'Berhasil menambah server');
    }
}
