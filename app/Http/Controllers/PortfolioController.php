<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $projects = Project::where('status', 'completed')
            ->latest('end_date')
            ->get();

        return Inertia::render('portfolio/index', [
            'projects' => $projects,
            'appName' => config('app.name'),
        ]);
    }
}
