<?php

use Illuminate\Database\Seeder;

class ResetDatabase extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('users')->truncate();
        DB::table('laboratories')->truncate();
        Schema::enableForeignKeyConstraints();
    }
}
