<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Company extends Model
{
    protected $table = 'companies';
    protected $fillable = ['name', 'logo', 'website'];
    public $timestamps = true;

    public function user()
    {
        return $this->hasMany(user::class);
    }
}
