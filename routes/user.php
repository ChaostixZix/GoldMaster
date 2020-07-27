<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth',
], function ()
{
    Route::get('loginPage', 'UserAuthController@loginPage')->name('user.auth.loginPage');
    Route::get('registerPage', 'UserAuthController@registerPage')->name('user.auth.registerPage');
    Route::post('register', 'UserAuthController@register')->name('user.auth.register');
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
           Route::post('cancel/{id}', 'HistoryController@cancel')->name('user.history.cancel');
           Route::post('add', 'HistoryController@addOrder')->name('user.history.addorder');
           Route::post('uploadFoto', 'HistoryController@uploadFoto')->name('user.history.uploadFoto');
       });

        Route::group([
            'prefix' => 'sell'
        ], function ()
        {
            Route::get('', 'SellController@index')->name('user.sell');
        });

        Route::group([
            'prefix' => 'memberstock'
        ], function ()
        {
            Route::get('', 'MemberStockController@index')->name('user.memberstock');
            Route::post('update/{id}', 'MemberStockController@edit')->name('user.memberstock.update');
            Route::post('insert', 'MemberStockController@insert')->name('user.memberstock.insert');
        });
    });
});
