<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public function login(Request $request)
    {
        $validator = $this->validator($request->all());
        if($validator->fails())
            return response($validator->errors(), 417);
        $credentials = $this->credentials($request);
        $this->guard()->attempt($credentials);
        if($this->guard()->check()){
            return $this->guard()->user();
        }
        return response(['message' => 'fail to login'], 403);
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
          'email' => 'required|email',
          'password' => 'required'
        ]);
    }

    private function credentials(Request $request)
    {
        return [
            'email' => $request->email,
            'password' => $request->password,
        ];
    }
}
