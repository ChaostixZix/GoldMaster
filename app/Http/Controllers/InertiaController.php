<?php

namespace App\Http\Controllers;

use App\Data\Category;
use App\Data\Items;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class InertiaController extends Controller
{
    public function index()
    {
        if(!Session::has('currency'))
        {
            Session::put('currency', 'usd');
        }
        return Inertia::render('Depan/Depan', [
            'games' => function () {
                return (new Category())->getAll();
            },
            'items' => function ()
            {
                return (new Items())->getAll();
            }
        ]);
    }
}
