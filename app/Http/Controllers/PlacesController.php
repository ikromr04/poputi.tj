<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PlacesController extends Controller
{
  public function fetchByName(Request $request)
  {
    $name = $request->query('name');

    if (!$name) return response()->json([], 204);
    $apiKey = config('services.google_maps_api.key');

    $response = Http::get('https://maps.googleapis.com/maps/api/place/autocomplete/json', [
      'input' => $name,
      'key' => $apiKey,
      'language' => app()->getLocale(),
      'components' => 'country:TJ',
    ]);


    if ($response->successful()) {
      $places = collect($response->json()['predictions'])->map(function ($prediction) {
        return [
          'value' => $prediction['place_id'],
          'label' => $prediction['description'],
        ];
      });

      return response()->json($places, 200);
    }

    return response()->json(['error' => 'Не удалось получить места'], 500);
  }
}
