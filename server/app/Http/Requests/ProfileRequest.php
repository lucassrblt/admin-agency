<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            'first_name' => 'string|required',
            'last_name' => 'string|required',
            'phone' => 'string',
            'address' => 'string',
            'city' => 'string',
            'state' => 'string',
            'zip' => 'string',
            'country' => 'string',
            'avatar' => 'file|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}
