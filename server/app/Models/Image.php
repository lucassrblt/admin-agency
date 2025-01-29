<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Property;

class Image extends Model
{
    //
    protected $fillable = ['property_id', 'url', 'order'];

    public function property(){
        return $this->belongsTo(Property::class);
    }   

}
