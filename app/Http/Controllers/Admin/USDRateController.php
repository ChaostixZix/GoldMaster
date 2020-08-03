<?php

namespace App\Http\Controllers\Admin;

use App\Data\USDRate;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class USDRateController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/USDRate/USDRate',
            [
                'idr' => function () {
                    return (new USDRate())->getIdr();
                }
            ]);
    }

    public function changeIdr(Request $request)
    {
        if ((new USDRate())->changeIdr($request->get('price'))) {
            return redirect()->back()->with('success', 'Changed IDR Rate successfuly');
        }
        return redirect()->back();
    }
}

