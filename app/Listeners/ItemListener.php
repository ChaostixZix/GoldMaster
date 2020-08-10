<?php

namespace App\Listeners;

use App\Events\ItemEvents;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ItemListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ItemEvents  $event
     * @return void
     */
    public function handle(ItemEvents $event)
    {
        //
    }
}
