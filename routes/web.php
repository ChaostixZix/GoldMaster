<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Test route to verify Laravel is working
Route::get('/test', function () {
    return response()->json([
        'message' => 'Laravel 7 application is running successfully with PHP 8.3!',
        'php_version' => PHP_VERSION,
        'laravel_version' => app()->version(),
        'environment' => app()->environment(),
        'database' => 'SQLite connected',
        'time' => now()
    ]);
});

// Simple HTML route
Route::get('/welcome', function () {
    return view('welcome');
});

Route::group(['prefix' => '', 'middleware' => 'UserShow'], function (){
    Route::get('', [\App\Http\Controllers\InertiaController::class, 'index'])->name('depan.index');
    Route::get('changeCurrency/{currency}', [\App\Http\Controllers\CurrencyController::class, 'change'])->name('depan.changeCurrency');
});

Route::get('email', function ()
{
    return view('email');
});
