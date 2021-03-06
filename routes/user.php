<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth',
    'middleware' => 'UserShow'
], function ()
{
    Route::get('loginPage', 'UserAuthController@loginPage')->name('user.auth.loginPage');
    Route::get('registerPage', 'UserAuthController@registerPage')->name('user.auth.registerPage');
    Route::get('forgotPage', 'UserAuthController@forgotPage')->name('user.auth.forgotPage');
    Route::get('resetPass/{code}', 'UserAuthController@resetPass')->name('user.auth.resetPass');
    Route::post('resetNow/{id_user}/{password}', 'UserAuthController@resetNow')->name('user.auth.resetNow');
    Route::get('forgotNow/{email}', 'UserAuthController@forgotNow')->name('user.auth.forgotNow');
    Route::post('register', 'UserAuthController@register')->name('user.auth.register');
    Route::post('login', 'UserAuthController@login')->name('user.auth.login');
    Route::get('logout', 'UserAuthController@logout')->name('user.auth.logout');
});
Route::group([
    'prefix' => 'dashboard',
    'middleware' => ['UserShow', 'cekUser']
], function ()
{
    Route::get('', 'DashboardController@index')->name('user.index');

    Route::group([
        'prefix' => 'profile'
    ], function ()
    {
        Route::get('', 'ProfileController@index')->name('user.profile');
        Route::post('update', 'ProfileController@update')->name('user.profile.update');
        Route::get('getCode', 'ProfileController@getCode')->name('user.profile.getcode');
    });

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
           Route::post('uploadFoto', 'HistoryController@uploadFoto1')->name('user.history.uploadFoto');
       });

        Route::group([
            'prefix' => 'sell'
        ], function ()
        {
            Route::get('{game?}', 'SellController@index')->name('user.sell');
        });
        Route::group([
            'prefix' => 'withdraw'
        ], function ()
        {
            Route::get('', 'WithdrawController@index')->name('user.withdraw');
            Route::post('request', 'WithdrawController@request')->name('user.withdraw.request');
        });

        Route::group([
            'prefix' => 'memberstock'
        ], function ()
        {
            Route::get('', 'MemberStockController@index')->name('user.memberstock');
            Route::post('update/{id}', 'MemberStockController@edit')->name('user.memberstock.update');
            Route::post('insert', 'MemberStockController@insert')->name('user.memberstock.insert');
            Route::post('delete/{id}', 'MemberStockController@delete')->name('user.memberstock.delete');
        });

    });
});
