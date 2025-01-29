<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyLocalisation extends Model
{
    protected $fillable = [
        'property_id', 'address', 'city', 'zipcode'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
