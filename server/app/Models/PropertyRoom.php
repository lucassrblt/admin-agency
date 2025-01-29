<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyRoom extends Model
{
    protected $fillable = [
        'property_id', 'bedroom', 'bathroom', 'waterroom', 
        'toilets', 'toilets_separate', 'cellar', 'cellar_surface',
        'dinning_room', 'dinning_room_surface', 'living_room',
        'living_room_surface'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
