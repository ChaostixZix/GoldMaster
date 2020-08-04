<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CurrencyController extends Controller
{
    public function change($currency)
    {
        Session::put('currency', $currency);
        return redirect()->back();
    }
}
