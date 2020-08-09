<?php

namespace App\Listeners;

use App\Events\SellEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SellListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Handle the event.
     *
     * @param  SellEvent  $event
     * @return void
     */
    public function handle(SellEvent $event)
    {
        //
    }
}
