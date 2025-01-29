<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ImageRequest;
use App\Models\Image;
use App\Http\Controllers\DiskController;

class ImageController extends Controller
{
    //
    public function index($propery_id){
        $images = Image::where('property_id', $propery_id)->get();
        
        
        // THEN SORT BY ORDER


        return response()->json([
            'success' => true,
            'data' => $images
        ]);

    }

    public function store(ImageRequest $request){
        $diskController = new DiskController();

        $data = $request->validated();
        
        $image = Image::create($data);
        return response()->json([
            'success' => true,
            'data' => $image->only(['url', 'order'])
        ]);
    }

}
