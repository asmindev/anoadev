<?php

namespace Database\Factories;

use App\Models\Visitor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Visitor>
 */
class VisitorFactory extends Factory
{
    protected $model = Visitor::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $deviceType = fake()->randomElement(['desktop', 'mobile', 'tablet']);
        $browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
        $platforms = match ($deviceType) {
            'desktop' => ['Windows', 'macOS', 'Linux'],
            'mobile' => ['Android', 'iOS'],
            'tablet' => ['Android', 'iOS', 'iPadOS'],
        };

        $paths = ['/', '/portfolio', '/contact', '/admin/dashboard', '/admin/projects', '/admin/settings'];

        $countries = [
            ['country' => 'Indonesia', 'code' => 'ID', 'city' => fake()->randomElement(['Jakarta', 'Surabaya', 'Bandung', 'Kendari', 'Makassar', 'Medan'])],
            ['country' => 'United States', 'code' => 'US', 'city' => fake()->randomElement(['New York', 'Los Angeles', 'Chicago', 'San Francisco'])],
            ['country' => 'Singapore', 'code' => 'SG', 'city' => 'Singapore'],
            ['country' => 'Japan', 'code' => 'JP', 'city' => fake()->randomElement(['Tokyo', 'Osaka', 'Kyoto'])],
            ['country' => 'Malaysia', 'code' => 'MY', 'city' => fake()->randomElement(['Kuala Lumpur', 'Penang', 'Johor Bahru'])],
            ['country' => 'Germany', 'code' => 'DE', 'city' => fake()->randomElement(['Berlin', 'Munich', 'Hamburg'])],
            ['country' => 'Australia', 'code' => 'AU', 'city' => fake()->randomElement(['Sydney', 'Melbourne', 'Brisbane'])],
        ];

        $countryData = fake()->randomElement($countries);

        return [
            'ip_address' => fake()->ipv4(),
            'path' => fake()->randomElement($paths),
            'method' => 'GET',
            'device_type' => $deviceType,
            'browser' => fake()->randomElement($browsers),
            'browser_version' => fake()->numerify('##.#'),
            'platform' => fake()->randomElement($platforms),
            'platform_version' => fake()->numerify('##.#'),
            'country' => $countryData['country'],
            'country_code' => $countryData['code'],
            'city' => $countryData['city'],
            'referrer' => fake()->optional(0.3)->randomElement(['https://google.com', 'https://github.com', 'https://twitter.com', null]),
            'user_agent' => fake()->userAgent(),
            'created_at' => fake()->dateTimeBetween('-30 days', 'now'),
        ];
    }
}
