<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CountriesAndCitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = Storage::disk('public')->get('countries.json');
        $countries = json_decode($json);

        foreach ($countries as $country){
            $id = \App\Country::create([
                'name' => $country->name,
                'region' => $country->region
            ])->id;
            foreach ($country->states as $state){
                \App\City::create([
                    'name' => $state->name,
                    'code' => $state->code,
                    'country_id' => $id
                ]);
            }
        }
    }
}
