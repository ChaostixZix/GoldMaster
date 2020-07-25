<?php

namespace App\Http\Controllers\Admin;

use App\Data\Category;
use App\Data\Items;
use App\Data\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard/Depan', [
            'userCount' => count((new Users)->getAll()),
            'itemCount' => count((new Items())->getAll()),
            'categoryCount' => count((new Category())->getAll())
        ]);
    }
}
