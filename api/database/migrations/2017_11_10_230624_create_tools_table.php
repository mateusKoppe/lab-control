<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateToolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tools', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label', 60)
                ->unique();
            $table->string('name', 60);
            $table->integer('laboratory')
                ->unsigned();
            $table->enum('status', ['enable', 'alocated', 'disable'])
                ->default('enable');
            $table->text('description')
                ->nullable();
            $table->string('place', 85)
                ->nullable();

            $table->foreign('laboratory')
                ->references('id')
                ->on('laboratories');
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
        Schema::dropIfExists('tools');
    }
}
