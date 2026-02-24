<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CompanyProfile>
 */
class CompanyProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'AnoadDev',
            'tagline' => fake()->catchPhrase(),
            'description' => fake()->paragraph(3),
            'email' => 'hello@anoadev.com',
            'phone' => fake()->phoneNumber(),
            'whatsapp' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'city' => 'Kendari',
            'province' => 'Sulawesi Tenggara',
            'website' => 'https://anoadev.tech',
            'instagram' => 'https://instagram.com/anoadev',
            'github' => 'https://github.com/anoadev',
        ];
    }
}
