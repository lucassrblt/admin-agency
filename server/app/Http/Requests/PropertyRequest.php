<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Target Section
            'targetSection.bienType' => 'required|in:APARTMENT,HOUSE,LAND',
            'targetSection.transactionType' => 'required|in:SALE,RENT',
    
            // General Section - General
            'generalSection.general.title' => 'required|string|max:255',
            'generalSection.general.description' => 'required|string',
            'generalSection.general.availabilityDate' => 'required|date',
            'generalSection.general.subtype' => 'nullable|string',
            'generalSection.general.surface' => 'required|numeric|min:0',
            'generalSection.general.landSurface' => 'nullable|numeric|min:0',
            'generalSection.general.maxSurface' => 'nullable|numeric|min:0',
            'generalSection.general.room' => 'nullable|integer|min:0',
    
            // Price for Buy
            'generalSection.priceForBuy.honoraryFor' => 'required|in:BUYER,SELLER',
            'generalSection.priceForBuy.honorary' => 'nullable|numeric|min:0',
            'generalSection.priceForBuy.price' => 'required_if:targetSection.transactionType,SALE|numeric|min:0',
            'generalSection.priceForBuy.landPrice' => 'nullable|numeric|min:0',
            'generalSection.priceForBuy.priceSurface' => 'nullable|numeric|min:0',
            'generalSection.priceForBuy.priceWithHonorary' => 'nullable|numeric|min:0',
            'generalSection.priceForBuy.coownership' => 'boolean',
    
            // Price for Rent
            'generalSection.priceForRent.tenseArea' => 'boolean',
            'generalSection.priceForRent.rentBase' => 'required_if:targetSection.transactionType,RENT|numeric|min:0',
            'generalSection.priceForRent.rentBySurface' => 'nullable|numeric|min:0',
            'generalSection.priceForRent.charges' => 'nullable|in:INCLUDE,EXCLUDE',
            'generalSection.priceForRent.chargesValue' => 'nullable|numeric|min:0',
            'generalSection.priceForRent.rentWithCharges' => 'nullable|numeric|min:0',
            'generalSection.priceForRent.guarantee' => 'nullable|numeric|min:0',
    
            // Agency Fees
            'generalSection.agencyFees.honoraryTTCAmount' => 'nullable|numeric|min:0',
            'generalSection.agencyFees.inventoryFees' => 'nullable|numeric|min:0',
    
            // Localisation
            'generalSection.localisation.address' => 'required|string',
            'generalSection.localisation.city' => 'required|string',
            'generalSection.localisation.zipcode' => 'required|string',
    
            // Complementary Section - Room
            'complementarySection.room.bedroom' => 'nullable|integer|min:0',
            'complementarySection.room.bathroom' => 'nullable|integer|min:0',
            'complementarySection.room.waterroom' => 'nullable|integer|min:0',
            'complementarySection.room.toilets' => 'nullable|integer|min:0',
            'complementarySection.room.toiletsSeparate' => 'boolean',
            'complementarySection.room.cellar' => 'boolean',
            'complementarySection.room.cellarSurface' => 'nullable|numeric|min:0',
            'complementarySection.room.dinningRoom' => 'boolean',
            'complementarySection.room.dinningRoomSurface' => 'nullable|numeric|min:0',
            'complementarySection.room.livingRoom' => 'boolean',
            'complementarySection.room.livingRoomSurface' => 'nullable|numeric|min:0',
    
            // Property and Parking
            'complementarySection.propertyAndParking.buildYear' => 'nullable|integer|min:1800|max:'. date('Y'),
            'complementarySection.propertyAndParking.buildRecent' => 'boolean',
            'complementarySection.propertyAndParking.brandNew' => 'boolean',
            'complementarySection.propertyAndParking.worksNeeded' => 'boolean',
            'complementarySection.propertyAndParking.boxes' => 'nullable|integer|min:0',
            'complementarySection.propertyAndParking.garage' => 'boolean',
            'complementarySection.propertyAndParking.parkingPlaces' => 'nullable|integer|min:0',
            'complementarySection.propertyAndParking.floor' => 'nullable|integer',
            'complementarySection.propertyAndParking.balcony' => 'nullable|integer|min:0',
            'complementarySection.propertyAndParking.balconySurface' => 'nullable|numeric|min:0',
            'complementarySection.propertyAndParking.terrace' => 'nullable|integer|min:0',
            'complementarySection.propertyAndParking.garden' => 'boolean',
    
            // Other
            'complementarySection.other.tvCable' => 'boolean',
            'complementarySection.other.swimmingPool' => 'boolean',
            'complementarySection.other.convertibleAttic' => 'boolean',
            'complementarySection.other.view' => 'boolean',
            'complementarySection.other.entrance' => 'boolean',
            'complementarySection.other.towards' => 'boolean',
            'complementarySection.other.chimney' => 'boolean',
            'complementarySection.other.orientation' => 'nullable|in:NORTH, SOUTH, EAST, WEST',
        ];
    }
}
