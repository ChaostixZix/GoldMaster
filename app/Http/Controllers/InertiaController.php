<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class InertiaController extends Controller
{
    public function index()
    {
        return Inertia::render('Depan/Depan');
    }
}
