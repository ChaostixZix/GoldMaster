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
    public function index($game = null)
    {
        return Inertia::render('User/Sell/Sell',
            [
                'items' => function () use ($game) {
                    if($game !== null)
                    {
                        return (new Items())->getMathcingGame($game);
                    }
                    return (new Items())->getAll();
                },
                'perCategory' => function() use($game)
                {
                    if($game !== null)
                    {
                        return true;
                    }
                    return false;
                }
            ]);
    }
}
