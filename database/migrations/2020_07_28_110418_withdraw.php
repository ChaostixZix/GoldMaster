<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Withdraw extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdraw', function (Blueprint $table)
        {
            $table->integer('id')->unique()->autoIncrement();

            $table->integer('id_user');
            $table->enum('pembayaran', ['Paypal', 'Webmoney', 'Bitcoin', 'Etherum']);
            $table->text('ket_pembayaran');
            $table->integer('dollar');
            $table->enum('status', ['pending', 'process', 'done']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
