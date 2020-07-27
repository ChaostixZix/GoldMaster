<?php

namespace App\Http\Controllers\User;

use App\Admin\AdminAuth;
use App\Data\Users;
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

    public function registerPage()
    {
        return Inertia::render('User/Auth/Register');
    }

    public function register(Request $request)
    {
        $data = $request->all();
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT, ['cost' => 10]);
        $register = (new Users())->insertRaw($data);
        if (
            ($register)
        ) {
            Session::put('user', $data['email']);
            Session::put('id_user', (new UserAuth())->get($data['email'])->id_user);
            return redirect(route('user.index'));
        }
        return redirect()->back()->with('error', 'Email/Password salah');
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
