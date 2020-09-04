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
        date_default_timezone_set('Asia/Makassar');
        var_dump(date('Y-m-d H:i:s'));
//        $schedule->call(function () {
//            $get = (new Order())->getAllNotCancelled();
//            foreach ($get as $g) {
////                var_dump(date('Y-m-d H:i:s'));
//                $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', date('Y-m-d H:i:s'));
//                $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $g->created_at);
//                $diff = $to->diffInMinutes($from);
//                if ($diff > 59 && $g->file === NULL) {
//                    $do = (new Order())->cancel($g->id_order);
//                } else {
//                    var_dump('test');
//                }
//            }
//        })->everyMinute();
    }


    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');
        require base_path('routes/console.php');
    }
}
