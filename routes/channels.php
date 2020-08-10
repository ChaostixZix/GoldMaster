<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int)$user->id === (int)$id;
});



Broadcast::channel('Web.{id}', function ($id) {
    return true;
});

Broadcast::channel('Web.{id_user}', function ($id_user) {
    return $id_user === \Illuminate\Support\Facades\Session::get('id_user');
});
Broadcast::channel('Item', function () {
    return true;
});
