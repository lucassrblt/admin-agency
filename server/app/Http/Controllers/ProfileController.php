<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\BaseController;
use App\Models\Profile;



class ProfileController extends BaseController
{
    public function index()
    {
        //
    }

    public function store(ProfileRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();
    
        // Debug
        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
    
        try {
            dd([
                'user' => $user,
                'user_class' => get_class($user),
                'methods' => get_class_methods($user)
            ]);
            
            $profile = $user->profile()->create($data);
            
            return response()->json([
                'message' => 'Profile created successfully',
                'profile' => $profile
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }

    }

    public function show($id)
    {
        //
    }
}
