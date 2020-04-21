<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_packages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('travel_date')->nullable();
            $table->integer('flexibility')->nullable();
            $table->string('budget')->nullable();
            $table->string('room_type')->nullable();
            $table->string('hotel_rating')->nullable();
            $table->string('hotel_location')->nullable();
            $table->string('notes', 1000)->nullable();
            $table->unsignedBigInteger('booking_id')->nullable();
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('custom_packages');
    }
}
