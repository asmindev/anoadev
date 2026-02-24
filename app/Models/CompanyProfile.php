<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    /** @use HasFactory<\Database\Factories\CompanyProfileFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'tagline',
        'description',
        'logo',
        'email',
        'phone',
        'whatsapp',
        'address',
        'city',
        'province',
        'website',
        'instagram',
        'github',
        'linkedin',
        'facebook',
        'twitter',
    ];

    /**
     * Get the single company profile instance, creating one if it doesn't exist.
     */
    public static function getInstance(): self
    {
        return self::firstOrCreate([], ['name' => config('app.name', 'AnoadDev')]);
    }
}
