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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Auth')->group(function() {
  Route::post('register', 'RegisterController@register');
  Route::post('login', 'LoginController@login');
});

Route::resource('laboratories', 'LaboratoryController')->middleware('auth:api');

Route::prefix('tools')
    ->middleware('auth:api')
    ->group(function() {
        Route::post('list/{laboratory}', 'ToolController@store');
        Route::get('list/{laboratory}', 'ToolController@index');
        Route::get('item/{tool}', 'ToolController@show');
        Route::put('item/{tool}', 'ToolController@update');
        Route::delete('item/{tool}', 'ToolController@destroy');
    });
