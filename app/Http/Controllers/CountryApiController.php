<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class CountryApiController extends Controller
{
    public function index()
    {
        $url = "https://restcountries.eu/rest/v2/all";

        $response = Http::get($url);

        if ($response->successful()) {
            $countries = $response->json();
            $collection = collect($countries);

            $filtered = $collection->filter(function ($value, $key) {
                return $value['population'] >= 25000000 && $value['population'] <= 40000000;
            })->values();

            $totalPopulation = $collection->sum('population');

            return response()->json([
                'success' => true,
                'message' => 'Success',
                'totalPopulation' => $totalPopulation,
                'data' => $filtered
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Server Error'
            ], 500);
        }
    }

    public function getAsianCountries()
    {
        $url = "https://restcountries.eu/rest/v2/region/asia";

        $response = Http::get($url);

        if ($response->successful()) {
            $asianCountries = $response->json();

            return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $asianCountries
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Server Error'
            ], 500);
        }
    }
}
