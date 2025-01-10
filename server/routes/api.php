<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;

Route::get('/', function () {
    return view('welcome');
})->middleware('auth:sanctum');

// Auth routes
Route::prefix('auth')->group(function() {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

// property routes
// Route::apiResources('property', [PropertyController::class])->middleware('auth:sanctum');

