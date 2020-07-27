<?php

namespace App\Http\Controllers\User\Transaction;

use App\Data\Category;
use App\Data\MemberStok;
use App\Data\Server;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class MemberStockController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'User/MemberStock/MemberStock',
            [
                'stocks' => function () {
                    return (new MemberStok())->getByUser(Session::get('id_user'));
                },
                'server' => function () {
                    return (new Server())->getAll();
                },
                'game' => function () {
                    return (new Category())->getAll();
                },
            ]);
    }
}
