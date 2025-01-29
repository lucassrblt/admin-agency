<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\PropertyLocalisation;
use App\Http\Requests\PropertyRequest;
use App\Models\BaseModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\DiskController;


class PropertyController extends BaseController
{
    //

    public function index(Request $request){
        $city = $request->query('city');
        $type = $request->query('type');

        // Load every relations
        $relations = [
            'propertyLocalisation',
            'propertyTarget',
            'propertyRoom',
            'propertyOther',
            'propertyAgencyFees',
            'propertyPriceBuy',
            'propertyPriceRent',
            'propertyDpes',
            'propertyImages',
        ];

        $query = Property::with($relations);

        if($city){
            $query->whereHas('propertyLocalisation', function($q) use ($city) {
                $q->where('city', $city);
            });        
        }

        if($type){
            $query->whereHas('propertyTarget', function($q) use ($type) {
                $q->where('bien_type', $type);
            });         
        }

        // Query relation = + Pagination
        $properties = $query->get();
        $properties = BaseModel::convertSnakeToCamelRecursive($properties->toArray());
        $data = [
            'properties' => $properties
        ];

        return $this->sendResponse($data, 'Properties retrieved', 200);
    }

    public function show(string $id){
        $id = (int) $id;

        $property = Property::find($id);

        if(!$property){
            return $this->sendError('Property not found');
        }

        $relations = [
            'propertyLocalisation',
            'propertyTarget',
            'propertyRoom',
            'propertyOther',
            'propertyAgencyFees',
            'propertyPriceBuy',
            'propertyPriceRent',
            'propertyDpes',
            'propertyImages',
        ];

        $property->load($relations);
        $property = BaseModel::convertSnakeToCamelRecursive($property->toArray());

        return $this->sendResponse($property, 'Property retrieved', 200);

    }

    public function store(PropertyRequest $request)
    {
        $dataRequest = $request->validated();
        $dataRequest = BaseModel::convertCamelToSnakeRecursive($dataRequest);

        // $serializedData = BaseModel::convertCamelToSnake($dataRequest);
        // return $this->sendResponse($serializedData, "PropertyCreated", 200);
    
        DB::beginTransaction();
    
        try {
            $property = Property::create($dataRequest['general_section']['general']);

            if($dataRequest['target_section']['transaction_type'] == 'SALE'){
                // return $this->sendResponse($dataRequest['generalSection']['priceForBuy'], "PropertyCreated", 200);
                $property->propertyPriceBuy()->create($dataRequest['general_section']['price_for_buy']);
            }else{
                $property->propertyPriceRent()->create($dataRequest['general_section']['price_for_rent']);
            }
            
            $property->propertyLocalisation()->create($dataRequest['general_section']['localisation']);
    
            $property->propertyTarget()->create($dataRequest['target_section']);
            $property->propertyRoom()->create($dataRequest['complementary_section']['room']);
            
            $otherValues = array_merge(
                $dataRequest['complementary_section']['property_and_parking'] ?? [], 
                $dataRequest['complementary_section']['other'] ?? []
            );
            $property->propertyOther()->create($otherValues);

            $property->propertyAgencyFees()->create($dataRequest['general_section']['agency_fees']);
    
            // Commit the transaction
            DB::commit();
    
            $data = [
                'propertyId' => $property->id,
            ];
            return $this->sendResponse($data, "PropertyCreated", 200);
        } catch (\Exception $e) {
            // Rollback in case of any error
            DB::rollBack();
    
            // Log the error and return an error response
            Log::error('Property creation failed: ' . $e->getMessage());
            return $this->sendError('Property creation failed', 500);
        }
    }

    public function destroy(string $id){
        $id = (int) $id;
        $property = Property::find($id);
        if(!$property){
            return $this->sendError('Property not found');
        }

        Property::destroy($id);
        return $this->sendResponse([], 'Property deleted', 200);
    }

    public function getCities(){

        $cities = PropertyLocalisation::select('city')->distinct()->get();
        $cities = $cities->map(function($city){
            return $city->city;
        });

        return $this->sendResponse($cities, 'Cities retrieved', 200);
    }

    public function update(Request $request, string $id){
        $id = (int) $id;
        $property = Property::find($id);

        if(!$property){
            return $this->sendError('Property not found');
        }

        $data = $request->all();
        $property->update($data);

        return $this->sendResponse($property, 'Property updated', 200);
    }

    public function uploadImages(Request $request, string $id){
        $id = (int) $id;
        $data = $request->all();

        $property = Property::find($id);

        if(!$property){
            return $this->sendError('Property not found');
        }

        foreach($data['images'] as $image){
            $url = DiskController::store('s3_images' ,$image, $id);
            $property->propertyImages()->create([
                'property_id' => $id,
                'url' => $url,
                'order' => 0,
            ]);
        }

        return $this->sendResponse($property, 'Images added', 200);
    }

    public function uploadDpe(Request $request, string $id){
        $id = (int) $id;
        $data = $request->all();

        $property = Property::find($id);

        if(!$property){
            return $this->sendError('Property not found');
        }

        if($data['energy']){
            $urlEnergy = DiskController::store('s3_dpe' , $data['energy'], $id);
        }

        if($data['ges']){
            $urlGes = DiskController::store('s3_dpe', $data['ges'], $id);
        }   

        $property->propertyDpes()->create([
            'property_id' => $id,
            'energy' => $data['energy'] ? $urlEnergy : null,
            'ges' => $data['ges'] ? $urlGes : null,
        ]);

        return $this->sendResponse($property, 'Dpe added', 200);
    }
}
