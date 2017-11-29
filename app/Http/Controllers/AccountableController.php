<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AccountableController extends Controller
{
    public function index(){
      return User::all();
    }

    public function store(Request $request){
      $user = $request->user();
      $body = $request->all();
      unset($body['api_token']);
      if(!$user->hasPermissionLevel(1)){
        return response(['message' => 'Permission denied'], 403);
      }
      $validator = Validator::make($body, [
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'permission' => 'integer|min:1|max:3',
        'password' => 'required|string|max:255',
      ]);
      if($validator->fails())
          return response($validator->errors(), 417);
      return User::create($body);
    }

    public function update(Request $request, User $accountable){
      $user = $request->user();
      $body = $request->all();
      unset($body['api_token']);
      if(!$user->hasPermissionLevel(1)){
        return response(['message' => 'Permission denied'], 403);
      }
      $validator = Validator::make($body, [
        'name' => 'string|max:255',
        'email' => 'email|max:255',
        'permission' => 'integer|min:1|max:3',
        'password' => 'string|max:255',
      ]);
      if($validator->fails())
          return response($validator->errors(), 417);
      $accountable->update($body);
      return $accountable;
    }
}
