<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Image;
use App\Models\PropertyImage;

class DiskController extends Controller
{
    public static function store($diskName, $image, $id){

        /** @var \Illuminate\Filesystem\FilesystemManager $disk */
        $disk = Storage::disk($diskName);
        $uploadedPath = $disk->put('', $image);
        $url = $disk->url($uploadedPath);

        return $url;
    }
}
