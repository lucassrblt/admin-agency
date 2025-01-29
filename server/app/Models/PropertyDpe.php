<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyDpe extends Model
{
    //
    protected $table = 'property_dpes';
    protected $fillable = ['property_id', 'energy', 'ges'];

    public function property(){
        return $this->belongsTo(Property::class);
    }
}
