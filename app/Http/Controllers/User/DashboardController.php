<?php

namespace App\Http\Controllers\User;

use App\Events\Message;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Dashboard/Depan');
    }
}
