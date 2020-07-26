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
    });


});
