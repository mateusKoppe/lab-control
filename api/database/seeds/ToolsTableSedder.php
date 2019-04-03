<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Tool;
use App\Laboratory;

class ToolsTableSedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        Tool::create([
            'name' => 'Double Screwdrive',
            'laboratory' => 1,
            'status' => 'enable',
            // 'description' => '',
            'place' => 'wardrobe 2',
        ]);
        $tools_names_quantiy = ['double_screwdrive' => 1];
        for ($i=0; $i < 44; $i++) {
            $place = ['bookcase', 'wardrobe', 'drawer', ];
            $place = $place[array_rand($place)];
            $name = [
                'Double Screwdrive',
                'Screwdrive',
                'Drilling machine',
                'Hammer',
                'Router',
                'Computer',
            ];
            $name = $name[array_rand($name)];
            $status = rand(0, 3);
            switch($status){
                case 0:
                case 1:
                    $status = 'enable';
                break;
                case 2:
                    $status = 'alocated';
                break;
                case 3:
                    $status = 'disable';
                break;
            }
            Tool::create([
                'name' => $name,
                'laboratory' => $faker->randomElement(Laboratory::pluck('id')->toArray()),
                'status' => $status,
                'description' => rand(0,1) ? $faker->sentence(rand(3,8)) : null,
                'place' => "$place " . rand(1,3),
            ]);
        }
    }
}
