<?php

namespace App\Console;

use App\Transaction\Order;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        date_default_timezone_set('Etc/GMT+8');
        $schedule->call(function () {
            $get = (new Order())->getAllNotCancelled();
            foreach ($get as $g) {
                $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', date('Y-m-d H:i:s'));
                $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $g->created_at);
                $diff = $to->diffInMinutes($from);
                var_dump($diff);
                if ($diff > 59) {
                    $do = (new Order())->cancel($g->id_order);
                }
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
