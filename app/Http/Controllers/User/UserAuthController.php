<?php

namespace App\Http\Controllers\User;

use App\Admin\AdminAuth;
use App\Data\Users;
use App\Events\Message;
use App\Forgot;
use App\Http\Controllers\Controller;
use App\User;
use App\User\EmailCode;
use App\User\UserAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class UserAuthController extends Controller
{
    public function loginPage()
    {
        if (Session::has('user')) {
            return redirect(route('user.index'));
        }
        return Inertia::render('User/Auth/Login');
    }

    public function forgotPage()
    {
        return Inertia::render('User/Auth/Forgot');
    }

    public function resetPass($base64)
    {
        $code = base64_decode($base64);
        $codeGet = (new Forgot())->getByCode($code);
        if ($codeGet !== false) {
            $user = (new Users())->getById($codeGet)[0];
            return Inertia::render('User/Auth/ResetPass',
            ['user' => $user]);
        }
        return 'Link invalid';
    }

    public function resetNow($id_user, $password)
    {
        DB::table('t_users')->where('id_user', $id_user)->update([
            'password' => password_hash($password, PASSWORD_DEFAULT, ['cost' => 10])
        ]);
        (new Forgot())->deleteRaw($id_user);
        return redirect(route('user.auth.loginPage'));
    }

    public function forgotNow($email)
    {
        $get = false;
        $getByEmail = DB::table('t_users')->where('email', $email);
        $getByUser = DB::table('t_users')->where('username', $email);
        if ($getByEmail->exists()) {
            $get = $getByEmail->first();
            $id_user = $getByEmail->first()->id_user;
        }
        if ($getByUser->exists()) {
            $get = $getByUser->first();
            $id_user = $getByUser->first()->id_user;
        }
        if ($get !== false) {
            try {
                Mail::send('reset', [
                    'link' => route('user.auth.resetPass', ['code' => base64_encode((new Forgot())->getCode($id_user))]),

                ], function ($message) use ($get) {
                    $message->subject('GoldMaster - Forgot Password');
                    $message->to($get->email);
                    $message->from('postmaster@mail.goldmastergm.com', 'GoldMaster ID');
                });
                return response(['status' => true]);
            } catch (\Exception $e) {
                return response(['status' => false, 'errors' => $e->getMessage()]);
            }
        }
        return response(['status' => false, 'Username or Email not found']);

    }

    public function registerPage()
    {
        if (Session::has('user')) {
            return redirect(route('user.index'));
        }
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
            Session::put('username', $data['username']);
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
            $username = (new Users())->getByEmail($data['email'])[0]->username;
            Session::put('username', $username);
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
