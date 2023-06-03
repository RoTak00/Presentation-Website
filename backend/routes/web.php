<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserMessageController;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::post('/api/contact', [UserMessageController::class, 'store']);

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware("auth");

Route::resource('projects', ProjectController::class)->middleware("auth");