<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyOther extends Model
{
    protected $fillable = [
        'property_id', 'build_year', 'build_recent', 'brand_new',
        'works_needed', 'boxes', 'garage', 'parking_places',
        'floor', 'balcony', 'balcony_surface', 'terrace',
        'garden', 'tv_cable', 'swimming_pool', 'convertible_attic',
        'view', 'entrance', 'towards', 'chimney', 'orientation'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
