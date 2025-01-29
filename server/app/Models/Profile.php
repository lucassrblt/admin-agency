<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    //
    protected $table = 'profiles';
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'phone',
        'address',
        'city',
        'state',
        'zip',
        'country',
        'avatar',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
