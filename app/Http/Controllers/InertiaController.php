<?php

namespace App\Http\Controllers;

use App\Data\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class InertiaController extends Controller
{
    public function index()
    {
        return Inertia::render('Depan/Depan', [
            'games' => function () {
                return (new Category())->getAll();
            },
        ]);
    }
}
