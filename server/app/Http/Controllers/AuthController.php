<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends BaseController
{
    //
    public function register(RegisterRequest $request)
    {
        $request = $request->validated();

        $user = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user->only(['email']),
            'token' => $token,
        ];

        return $this->sendResponse($response, 'User registered successfully', 201);
    }

    public function login(LoginRequest $request)
    {
        $request = $request->validated();

        $user = User::where('email', $request['email'])->first();

        if (!$user || !Hash::check($request['password'], $user->password)) {
            return $this->sendError('Invalid credentials', [], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'status' => 'success',
            'user' => $user->only(['email']),
            'token' => $token,
        ];

        return $this->sendResponse($response, 'User logged in successfully', 200);
    }

    public function logout()
    {
        $user = auth()->user();

        if ($user){
            $user->tokens()->delete();
            return response([
                'status' => 'success',
                'message' => 'Logged out',
            ], 200);
        }else {
            return response([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
    }
}
