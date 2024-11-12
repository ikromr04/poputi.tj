<?php

use App\Http\Controllers\PlacesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/places', [PlacesController::class, 'fetchByName']);

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');
