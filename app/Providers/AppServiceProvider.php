<?php

namespace App\Providers;

use App\Data\Users;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $saldo = 0;
        Inertia::share('flash', function () use ($saldo) {
            if(Session::has('user'))
            {
                $saldo = (new Users())->getById(Session::get('id_user'))[0]->saldo;
                Session::put('saldo', $saldo);
            }
            return [
                'success' => Session::get('success'),
                'user' => Session::get('user'),
                'id_user' => Session::get('id_user'),
                'error' => Session::get('error'),
                'saldo' => $saldo,
                'idrrate' => DB::table('usdrate')->where('countryCode', 'idr')->get()[0]->price,
                'currency' => Session::get('currency'),
            ];
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
