<?php

namespace App\Http\Controllers\Weather;

use Validator;
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
        $input_rules = [
            'city' => 'required|min:2|max:32'
        ];
        $messages = [
            'required' => 'The :attribute is required',
            'min' => 'The :attribute must be longer then :size symbols',
            'max' => 'The :attribute must be shorter then 32 symbols'
        ];

        $data_validator = Validator::make($data, $input_rules, $messages);

        if (!$data_validator->fails()) {
            $params=[
                'q' => $data['city'],
                'APPID'=>'2305121bf1c66ad4a173984e9fa33fad',
                'units' => 'metric'
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://api.openweathermap.org/data/2.5/weather?'.http_build_query($params));
            curl_setopt($ch, CURLOPT_HTTPGET, 1);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $curlResp = curl_exec($ch);
            curl_close($ch);

            $curlResp = json_decode($curlResp);

            if (isset($curlResp->cod) && $curlResp->cod !== 200) {
                return response()->json([['field' => 'search', 'msg' => $curlResp->message]], 400);
            }

            return response()->json($curlResp);
        } else {
            return response()->json([['field' => 'search', 'msg' => $data_validator->errors()->first()]], 400);
        }
    }
}