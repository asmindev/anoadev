<?php

namespace App\Http\Controllers;

use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class VisitorController extends Controller
{
    /**
     * Show visitor analytics dashboard.
     */
    public function index(Request $request): Response
    {
        $period = $request->get('period', 'month');

        $baseQuery = Visitor::query()->period($period);

        // Total visitors
        $totalVisitors = (clone $baseQuery)->count();
        $uniqueVisitors = (clone $baseQuery)->distinct('ip_address')->count('ip_address');

        // Device breakdown
        $devices = (clone $baseQuery)
            ->select('device_type', DB::raw('count(*) as count'))
            ->whereNotNull('device_type')
            ->groupBy('device_type')
            ->orderByDesc('count')
            ->get();

        // Browser breakdown
        $browsers = (clone $baseQuery)
            ->select('browser', DB::raw('count(*) as count'))
            ->whereNotNull('browser')
            ->groupBy('browser')
            ->orderByDesc('count')
            ->get();

        // Platform breakdown
        $platforms = (clone $baseQuery)
            ->select('platform', DB::raw('count(*) as count'))
            ->whereNotNull('platform')
            ->groupBy('platform')
            ->orderByDesc('count')
            ->get();

        // Country breakdown
        $countries = (clone $baseQuery)
            ->select('country', 'country_code', DB::raw('count(*) as count'))
            ->whereNotNull('country')
            ->groupBy('country', 'country_code')
            ->orderByDesc('count')
            ->limit(10)
            ->get();

        // Top pages
        $topPages = (clone $baseQuery)
            ->select('path', DB::raw('count(*) as count'))
            ->groupBy('path')
            ->orderByDesc('count')
            ->limit(10)
            ->get();

        // Visits per day (for chart)
        $visitsPerDay = (clone $baseQuery)
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Recent visitors
        $recentVisitors = Visitor::query()
            ->latest()
            ->limit(20)
            ->get();

        return Inertia::render('admin/analytics/index', [
            'period' => $period,
            'stats' => [
                'totalVisitors' => $totalVisitors,
                'uniqueVisitors' => $uniqueVisitors,
                'topPages' => $topPages,
                'devices' => $devices,
                'browsers' => $browsers,
                'platforms' => $platforms,
                'countries' => $countries,
                'visitsPerDay' => $visitsPerDay,
            ],
            'recentVisitors' => $recentVisitors,
        ]);
    }
}
