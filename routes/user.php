<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth',
], function ()
{
    Route::get('loginPage', 'UserAuthController@loginPage')->name('user.auth.loginPage');
    Route::post('login', 'UserAuthController@login')->name('user.auth.login');
    Route::get('logout', 'UserAuthController@logout')->name('user.auth.logout');
});
Route::group([
    'prefix' => 'dashboard',
    'middleware' => 'cekUser'
], function ()
{
    Route::get('', 'DashboardController@index')->name('user.index');


    Route::group([
        'prefix' => 'transaction',
        'namespace' => 'Transaction'
    ], function ()
    {
       Route::group([
           'prefix' => 'history'
       ], function ()
       {
           Route::get('', 'HistoryController@index')->name('user.history');
       });
    });
});
