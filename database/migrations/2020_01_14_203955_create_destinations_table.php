<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDestinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->integer('nights')->nullable();
            $table->unsignedBigInteger('custom_package_id')->nullable();
            $table->foreign('custom_package_id')->references('id')->on('custom_packages')->onDelete('cascade');
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
        Schema::dropIfExists('destinations');
    }
}
