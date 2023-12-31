<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BoardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('board')->group(function(){
    Route::get('/',[BoardController::class,'getAll']);
    Route::get('/{id}',[BoardController::class,'getBoard']);
    Route::get('/{boardId}/post/{postId}',[BoardController::class,'getPost']);
    Route::get('/{id}/post',[BoardController::class,'getPosts']);
    Route::post('/',[BoardController::class,'createBoard']);
    Route::post('/{id}/post',[BoardController::class,'createPost']);
    Route::delete('/{id}',[BoardController::class,'deleteBoard']);
    Route::delete('/{boardId}/post/{postId}',[BoardController::class,'deletePost']);
});







