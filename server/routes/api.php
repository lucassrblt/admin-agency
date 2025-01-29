<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\DiskController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return view('welcome');
})->middleware('auth:sanctum');

// Auth routes
Route::prefix('auth')->group(function() {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

// Profile routes
Route::apiResources(['profiles' => ProfileController::class]);

// Company Routes
Route::apiResources(['companies' => CompanyController::class]);

// Property routes
Route::apiResources(['properties' => PropertyController::class]);
Route::post('/properties/{property}/images', [PropertyController::class, 'uploadImages']);
Route::post('/properties/{property}/dpe', [PropertyController::class, 'uploadDpe']);
Route::get('/cities', [PropertyController::class, 'getCities']);


Route::post('/s3', [DiskController::class, 'index']);


