<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BaseModel extends Model
{
    public static function convertCamelToSnakeRecursive(array $array) {
        $result = [];
        foreach ($array as $key => $value) {
            // Convertir la clé de camelCase à snake_case
            $newKey = Str::snake($key);
            
            // Vérifier si la valeur est un tableau et appeler récursivement
            if (is_array($value)) {
                $result[$newKey] = BaseModel::convertCamelToSnakeRecursive($value);
            } else {
                $result[$newKey] = $value;
            }
        }
        return $result;
    }

    public static function convertSnakeToCamelRecursive(array $array) {
        $result = [];
        foreach ($array as $key => $value) {
            // Convertir la clé de snake_case à camelCase
            $newKey = lcfirst(str_replace(' ', '', ucwords(str_replace('_', ' ', $key))));
            
            // Vérifier si la valeur est un tableau et appeler récursivement
            if (is_array($value)) {
                $result[$newKey] = BaseModel::convertSnakeToCamelRecursive($value);
            } else {
                $result[$newKey] = $value;
            }
        }
        return $result;
    }
}
