<?php

namespace App\Http\Controllers\Admin;

use App\Admin\AdminAuth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('Admin/Auth/Login');
    }

    public function login(Request $request)
    {
        $data = $request->all();

        if ((new AdminAuth())->tryLogin($data['email'], $data['password'])) {
            Session::put('admin', $data['email']);
            return redirect(route('admin.index'));
        }
        return redirect()->back()->with('error', 'Email/Password salah');
    }

    public function logout(Request $request)
    {
        Session::pull('admin');
        return redirect(route('depan.index'));
    }
}
