<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class LaboratoriesAddOndeleteEvent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('laboratories', function (Blueprint $table) {
          $table->dropForeign(['accountable']);
          $table->foreign('accountable')
              ->references('id')
              ->on('users')
              ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('laboratories', function (Blueprint $table) {
          $table->dropForeign(['accountable']);
          $table->foreign('accountable')
              ->references('id')
              ->on('users');
        });
    }
}
