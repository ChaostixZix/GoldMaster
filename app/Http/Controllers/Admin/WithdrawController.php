<?php

namespace App\Http\Controllers\Admin;

use App\Data\Withdraw;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WithdrawController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Withdraw/Withdraw',
        [
            'requests' => function()
            {
                return (new Withdraw())->getAll();
            }
        ]);
    }
}
