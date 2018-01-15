<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => ['cors']], function () {
	
    Route::group(['prefix' => 'items'], function() {
	    Route::get('all','ItemController@AllItems');
	    Route::post('create','ItemController@store');
	    Route::delete('delete/{id}','ItemController@destroy');
	    Route::put('update/{id}','ItemController@update');
	});

	Route::group(['prefix' => 'user'], function() {
	    Route::post('register','UserController@store');
	    Route::post('login','UserController@login');
	});
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
