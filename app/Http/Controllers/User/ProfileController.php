<?php

namespace App\Http\Controllers\User;

use App\Data\Users;
use App\Http\Controllers\Controller;
use App\User\EmailCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use PharIo\Manifest\Email;

class ProfileController extends Controller
{
    private $namespace = 'User/Profile/';

    public function index()
    {
        return Inertia::render($this->namespace . 'Profile',
            [
                'input' => function () {
                    return (new Users())->getById(Session::get('id_user'))[0];
                }
            ]);
    }

    public function update(Request $request)
    {
        $code = $request->get('code');
        if ((new EmailCode())->getCode(Session::get('id_user')) === (int)$code) {
            (new Users())->updateRaw(Session::get('id_user'), $request->get('data'));
            (new EmailCode())->deleteCode(Session::get('id_user'), $code);
            (new EmailCode())->getCode(Session::get('id_user'));
            return redirect()->back()->with('success', 'Successfully changed your profile');
        }
        return redirect()->back()->with('error', 'Wrong code');
    }

    public function getCode()
    {
        try {
            Mail::send('email', [
                'code' => (new EmailCode())->getCode(Session::get('id_user')),

            ], function ($message) {
                $message->subject('GoldMaster - Confirmation Code');
                $message->to((new Users())->getById(Session::get('id_user'))[0]->email);
                $message->from('postmaster@mail.goldmastergm.com', 'GoldMaster ID');
            });
            return response(['status' => true]);
        } catch (\Exception $e) {
            return response(['status' => false, 'errors' => $e->getMessage()]);
        }
    }
}
