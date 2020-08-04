<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth',
    'middleware' => 'UserHide'
], function ()
{
    Route::get('loginPage', 'AdminAuthController@loginPage')->name('admin.auth.loginPage');
    Route::post('login', 'AdminAuthController@login')->name('admin.auth.login');
    Route::get('logout', 'AdminAuthController@logout')->name('admin.auth.logout');
});

Route::group([
    'prefix' => 'dashboard',
    'middleware' => ['UserHide', 'cekAdmin']
], function ()
{
   Route::get('', 'DashboardController@index')->name('admin.index');


   Route::group([
       'prefix' => 'game'
   ], function ()
   {
      Route::get('list', 'GameController@index')->name('admin.game');
      Route::post('delete/{id}', 'GameController@delete')->name('admin.game.delete');
      Route::post('tambah', 'GameController@tambah')->name('admin.game.tambah');
   });

    Route::group([
        'prefix' => 'server'
    ], function ()
    {
        Route::get('list', 'ServerController@index')->name('admin.server');
        Route::post('delete/{id}', 'ServerController@delete')->name('admin.server.delete');
        Route::post('tambah', 'ServerController@tambah')->name('admin.server.tambah');
    });

    Route::group([
        'prefix' => 'trademode'
    ], function ()
    {
        Route::get('list', 'TradeModeController@index')->name('admin.trademode');
        Route::post('delete/{id}', 'TradeModeController@delete')->name('admin.trademode.delete');
        Route::post('tambah', 'TradeModeController@tambah')->name('admin.trademode.tambah');
    });

    Route::group([
        'prefix' => 'order'
    ], function ()
    {
        Route::get('list', 'OrderController@index')->name('admin.order');
        Route::post('update', 'OrderController@update')->name('admin.order.update');
        Route::post('delete/{id}', 'OrderController@delete')->name('admin.order.delete');
    });

    Route::group([
        'prefix' => 'items'
    ], function ()
    {
        Route::get('list', 'ItemsController@index')->name('admin.items');
        Route::post('update', 'ItemsController@update')->name('admin.items.update');
        Route::post('insert', 'ItemsController@insert')->name('admin.items.insert');
        Route::post('delete/{id}', 'ItemsController@delete')->name('admin.items.delete');
    });

    Route::group([
        'prefix' => 'memberstock'
    ], function ()
    {
        Route::get('list', 'MemberStockController@index')->name('admin.memberstock');
        Route::post('delete/{id}', 'MemberStockController@delete')->name('admin.memberstock.delete');
    });

    Route::group([
        'prefix' => 'withdraw'
    ], function ()
    {
        Route::get('list', 'WithdrawController@index')->name('admin.withdraw');
        Route::post('update', 'WithdrawController@update')->name('admin.withdraw.update');
        Route::post('delete/{id}', 'WithdrawController@delete')->name('admin.withdraw.delete');
    });

    Route::group([
        'prefix' => 'usdrate'
    ], function ()
    {
        Route::get('', 'USDRateController@index')->name('admin.usdrate');
        Route::post('changeIdr', 'USDRateController@changeIdr')->name('admin.usdrate.changeIdr');
    });



});
