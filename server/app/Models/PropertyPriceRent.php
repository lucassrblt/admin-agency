<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyPriceRent extends Model
{
    protected $fillable = [
        'rent_base', 'rent_by_surface', 
        'charges', 'charges_value', 'rent_with_charges', 
        'guarantee'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
