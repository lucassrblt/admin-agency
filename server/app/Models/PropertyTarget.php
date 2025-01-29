<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyTarget extends Model
{

    protected $fillable = [
        'property_id', 'bien_type', 'transaction_type'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
