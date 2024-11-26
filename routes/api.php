<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlacesController;
use Illuminate\Support\Facades\Route;

Route::get('/places', [PlacesController::class, 'fetchByName']);

Route::get('/auth/login', [AuthController::class, 'check']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/forgot-password', [AuthController::class, 'sendResetLink']);
Route::post('/auth/reset-password', [AuthController::class, 'resetPassword']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
  Route::delete('/auth/login', [AuthController::class, 'logout']);
});
