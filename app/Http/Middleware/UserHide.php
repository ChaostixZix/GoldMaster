<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;

class UserHide
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Session::put('usershow', false);

        return $next($request);
    }
}
