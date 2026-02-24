<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\CompanyProfile;
use App\Models\Message;
use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@anoadev.com',
        ]);

        // Create clients
        $clients = Client::factory(15)->create();

        // Create projects for each client
        $clients->each(function ($client) {
            Project::factory()
                ->count(rand(1, 3))
                ->create([
                    'client_id' => $client->id,
                ]);
        });

        // Create messages (contact form submissions)
        Message::factory(25)->create();

        // Create company profile
        CompanyProfile::factory()->create();
    }
}
