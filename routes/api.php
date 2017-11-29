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

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('accountables')->group(function() {
  Route::get('', 'AccountableController@index');
  Route::post('', 'AccountableController@store')->middleware('auth:api');
  Route::put('{accountable}', 'AccountableController@update')->middleware('auth:api');
});


Route::namespace('Auth')->group(function() {
  Route::post('register', 'RegisterController@register');
  Route::post('login', 'LoginController@login');
});


Route::prefix('laboratories')
    ->group(function() {
        Route::post('', 'LaboratoryController@store')->middleware('auth:api');
        Route::get('', 'LaboratoryController@index');
        Route::get('{laboratory}', 'LaboratoryController@show');
        Route::put('{laboratory}', 'LaboratoryController@update')->middleware('auth:api');
        Route::delete('{laboratory}', 'LaboratoryController@destroy')->middleware('auth:api');
    });

Route::prefix('tools')
    ->group(function() {
        Route::post('list/{laboratory}', 'ToolController@store')->middleware('auth:api');
        Route::get('list/{laboratory}', 'ToolController@index');
        Route::get('item/{tool}', 'ToolController@show');
        Route::put('item/{tool}', 'ToolController@update')->middleware('auth:api');
        Route::delete('item/{tool}', 'ToolController@destroy')->middleware('auth:api');
    });
