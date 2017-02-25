<?php

namespace App\Http\Controllers\Weather;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WeatherController extends Controller
{

    public function show()
    {
        return view('controllers.weather.main',
            [
                'contentheader_title' => 'Get your own weather forecast',
                'scripts' => ['js/weather/main.js']
            ]);
    }

    public function addCity(Request $request) {
        $data = $request->all();

        if (!$data['city']) {
            return response()->json(['error'=> true, 'response' => ['field' => 'search', 'message' => 'Please, enter the city']]);
        }
    }
}