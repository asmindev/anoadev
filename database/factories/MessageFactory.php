<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'subject' => fake()->randomElement([
                'Project Inquiry',
                'Website Development',
                'Mobile App Development',
                'Maintenance Request',
                'General Question',
                'Quote Request',
                'Partnership Opportunity',
            ]),
            'message' => fake()->paragraph(4),
            'is_read' => fake()->boolean(30), // 30% sudah dibaca
        ];
    }
}
