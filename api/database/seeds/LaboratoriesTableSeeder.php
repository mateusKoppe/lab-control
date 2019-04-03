<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Laboratory;
use App\User;

class LaboratoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        Laboratory::create([
            'name' => 'Network lab',
            'description' => 'Bl B',
            'accountable' => 1,
        ]);
        for ($i=0; $i < 11; $i++) {
            Laboratory::create([
                'name' => $faker->words(rand(2,4) , true),
                'description' => !rand(0,2) ? $faker->sentence(rand(3,8)) : null,
                'accountable' => $faker->randomElement(User::pluck('id')->toArray()),
            ]);
        }
    }
}
