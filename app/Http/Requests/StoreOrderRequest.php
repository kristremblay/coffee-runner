<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'data' => [
                'user_id' => ['required', 'exists:users,id', 'numeric'],
                'coffee_run_id' => ['required', 'exists:coffee_runs,id', 'not_in:'.auth()->user()->id],
                'details' => ['required', 'json'],
            ],
        ];
    }
}
