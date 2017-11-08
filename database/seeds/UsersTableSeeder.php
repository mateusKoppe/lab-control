<?php

use Illuminate\Database\Seeder;
use App\User;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        User::create([
          'name' => 'Bruce Wayne',
          'email' => 'bruce@waynelta.com',
          'password' => bcrypt('imbatman'),
          'api_token' => 'MDSU4AAp6gSQBpJW2Gcbp4RYaOMdIULmVQ1XkgDnq2FTPtTkTkj7DrrdINC87JcY',
        ]);
        for ($i=0; $i < 4; $i++) {
          User::create([
            'name' => $faker->name,
            'email' => $faker->email,
            'password' => bcrypt('secret'),
          ])->generateToken();
        }
    }
}
