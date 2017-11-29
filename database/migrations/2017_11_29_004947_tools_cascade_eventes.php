<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ToolsCascadeEventes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tools', function (Blueprint $table) {
          $table->dropForeign(['laboratory']);
          $table->foreign('laboratory')
            ->references('id')
            ->on('laboratories')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tools', function (Blueprint $table) {
          $table->foreign('laboratory')
          ->references('id')
          ->on('laboratories');
        });
    }
}
