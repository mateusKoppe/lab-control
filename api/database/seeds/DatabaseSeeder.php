<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ResetDatabase::class);
        $this->call(UsersTableSeeder::class);
        $this->call(LaboratoriesTableSeeder::class);
        $this->call(ToolsTableSedder::class);
    }
}
