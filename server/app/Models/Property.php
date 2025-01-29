<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends BaseModel
{
    protected $fillable = [
        'title', 'description', 'availabilityDate', 
        'subtype', 'surface', 'room'
    ];



    public function propertyTarget()
    {
        return $this->hasOne(PropertyTarget::class);
    }

    public function propertyRoom()
    {
        return $this->hasOne(PropertyRoom::class);
    }

    public function propertyOther()
    {
        return $this->hasOne(PropertyOther::class);
    }

    public function propertyLocalisation()
    {
        return $this->hasOne(PropertyLocalisation::class);
    }

    public function propertyPriceRent()
    {
        return $this->hasOne(PropertyPriceRent::class);
    }

    public function propertyPriceBuy()
    {
        return $this->hasOne(PropertyPriceBuy::class);
    }

    public function propertyAgencyFees()
    {
        return $this->hasOne(PropertyAgencyFees::class);
    }

    public function propertyImages()
    {
        return $this->hasMany(PropertyImage::class);
    }

    public function propertyDpes()
    {
        return $this->hasOne(PropertyDpe::class);
    }
}