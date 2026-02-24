<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;
use Symfony\Component\HttpFoundation\Response;

class TrackVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Only track GET requests to avoid duplicate tracking on form submissions
        if ($request->method() !== 'GET') {
            return $response;
        }

        // Skip tracking for assets, API, and other non-page requests
        if ($request->is('build/*', 'storage/*', 'favicon.ico', 'robots.txt', '_debugbar/*', 'up')) {
            return $response;
        }

        $agent = new Agent;
        $agent->setUserAgent($request->userAgent());
        $agent->setHttpHeaders($request->headers->all());

        $deviceType = $agent->isTablet() ? 'tablet' : ($agent->isMobile() ? 'mobile' : 'desktop');
        $browser = $agent->browser() ?: null;
        $platform = $agent->platform() ?: null;

        Visitor::create([
            'ip_address' => $request->ip(),
            'path' => '/'.ltrim($request->path(), '/'),
            'method' => $request->method(),
            'device_type' => $deviceType,
            'browser' => $browser,
            'browser_version' => $browser ? ($agent->version($browser) ?: null) : null,
            'platform' => $platform,
            'platform_version' => $platform ? ($agent->version($platform) ?: null) : null,
            'country' => null,
            'country_code' => null,
            'city' => null,
            'referrer' => $request->header('referer'),
            'user_agent' => $request->userAgent() ?? '',
        ]);

        return $response;
    }
}
