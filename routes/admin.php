<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth',
], function ()
{
    Route::get('loginPage', 'AdminAuthController@loginPage')->name('admin.auth.loginPage');
    Route::post('login', 'AdminAuthController@login')->name('admin.auth.login');
    Route::get('logout', 'AdminAuthController@logout')->name('admin.auth.logout');
});

Route::group([
    'prefix' => 'dashboard',
    'middleware' => 'cekAdmin'
], function ()
{
   Route::get('', 'DashboardController@index')->name('admin.index');
});
