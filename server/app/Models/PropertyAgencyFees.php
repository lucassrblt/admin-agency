<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyAgencyFees extends Model
{
    protected $fillable = [
        'property_id',            
        'honorary_ttc_amount',
        'inventory_fees'
    ];
  

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
