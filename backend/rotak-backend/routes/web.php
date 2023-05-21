<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserMessageController;

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

Route::get('/api/0743283safngsrgnj88348gbfdw7534t', function () {
    return json_encode(["token"=>csrf_token()]);
});

Route::post('/api/contact', [UserMessageController::class, 'store']);
