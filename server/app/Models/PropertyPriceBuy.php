<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyPriceBuy extends Model
{
    protected $fillable = [
        'property_id', 'honorary_for', 'honorary', 'price', 
        'land_price', 'price_surface', 'price_with_honorary', 
        'coownership',
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
