<?php

namespace App\Http\Controllers;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{
    public function store(Request $request){
        $useremail = $request->get('email');
        $finduser = User::where('email',$useremail)->get();
        if ($finduser->count()) {
            return response()->json([
                'Message' => 'User is exist'
            ],200);
        }
        $User = new User();
        $User->email = $request->get('email');
        $User->name = $request->get('name');
        $User->password = bcrypt($request->get('password'));
        if (!$User->save()) {
            return response()->json([
                'Message' => 'User can not be saved'
            ],401);
        }
        return response()->json([
                'User' => $User
        ],200);   
    }

    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user  = JWTAuth::toUser($token);
        // all good so return the token
        return response()->json(compact('token','user'));
    }
}
