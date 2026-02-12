<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Message;
use App\Models\Project;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/dashboard', [
            'appName' => config('app.name'),
            'stats' => [
                'projects' => Project::count(),
                'activeProjects' => Project::where('status', 'active')->count(),
                'clients' => Client::count(),
                'messages' => Message::unread()->count(),
            ],
            'user' => [
                'name' => 'Admin User',
                'email' => 'admin@anoadev.com',
            ],
        ]);
    }
}
