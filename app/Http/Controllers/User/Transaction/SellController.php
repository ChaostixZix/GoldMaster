<?php

namespace App\Http\Controllers\User\Transaction;

use App\Data\Category;
use App\Data\Items;
use App\Data\Server;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SellController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Sell/Sell',
            [
                'items' => function () {
                    return (new Items())->getAll();
                },
            ]);
    }
}
