<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsurancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->date('birth_date')->nullable();
            $table->date('expire_date')->nullable();
            $table->string('passport_number')->nullable();
            $table->string('passport_name')->nullable();
            $table->string('gender')->nullable();
            $table->string('nationality')->nullable();
            $table->string('country')->nullable();
            $table->string('duration')->nullable();
            $table->date('start_date')->nullable();
            $table->string('insurance_type')->nullable();
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
        Schema::dropIfExists('insurances');
    }
}
