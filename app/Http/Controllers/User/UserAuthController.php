<?php

namespace App\Http\Controllers\User;

use App\Admin\AdminAuth;
use App\Http\Controllers\Controller;
use App\User\UserAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class UserAuthController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('User/Auth/Login');
    }

    public function login(Request $request)
    {
        $data = $request->all();
        if ((new UserAuth())->tryLogin($data['email'], $data['password'])) {
            Session::put('user', $data['email']);
            Session::put('id_user', (new UserAuth())->get($data['email'])->id_user);
            return redirect(route('user.index'));
        }
        return redirect()->back()->with('error', 'Email/Password salah');
    }

    public function logout(Request $request)
    {
        Session::pull('user');
        Session::pull('id_user');
        return redirect(route('depan.index'));
    }
}
