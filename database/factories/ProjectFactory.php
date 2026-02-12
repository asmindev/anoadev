<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = fake()->randomElement(['active', 'completed', 'on_hold', 'cancelled']);
        $startDate = fake()->dateTimeBetween('-1 year', 'now');

        return [
            'name' => fake()->randomElement([
                'E-commerce Platform',
                'Mobile Banking App',
                'Restaurant POS System',
                'Company Profile Website',
                'Inventory Management System',
                'Hotel Booking Platform',
                'School Management System',
                'Healthcare Portal',
                'Real Estate Website',
                'Event Management App',
            ]),
            'description' => fake()->paragraph(3),
            'status' => $status,
            'budget' => fake()->numberBetween(5000000, 100000000),
            'start_date' => $startDate,
            'end_date' => $status === 'completed'
                ? fake()->dateTimeBetween($startDate, 'now')
                : fake()->dateTimeBetween($startDate, '+6 months'),
        ];
    }
}
