<?php

namespace App\Http\Controllers\User\Transaction;

use App\Http\Controllers\Controller;
use App\Transaction\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class HistoryController extends Controller
{
    public function index()
    {
        return Inertia::render('User/History/History', [
            'orders' => function()
            {
                return (new History())->getByUser(Session::get('id_user'));
            }
        ]);
    }
}
