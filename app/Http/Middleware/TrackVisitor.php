<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
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

        $userAgent = $request->userAgent() ?? '';
        $parsed = $this->parseUserAgent($userAgent);

        Visitor::create([
            'ip_address' => $request->ip(),
            'path' => '/'.ltrim($request->path(), '/'),
            'method' => $request->method(),
            'device_type' => $parsed['device_type'],
            'browser' => $parsed['browser'],
            'browser_version' => $parsed['browser_version'],
            'platform' => $parsed['platform'],
            'platform_version' => $parsed['platform_version'],
            'country' => null,
            'country_code' => null,
            'city' => null,
            'referrer' => $request->header('referer'),
            'user_agent' => $userAgent,
        ]);

        return $response;
    }

    /**
     * Parse user agent string to extract device, browser, and platform info.
     *
     * @return array{device_type: string, browser: string|null, browser_version: string|null, platform: string|null, platform_version: string|null}
     */
    private function parseUserAgent(string $userAgent): array
    {
        $browser = null;
        $browserVersion = null;
        $platform = null;
        $platformVersion = null;
        $deviceType = 'desktop';

        // Detect platform
        if (preg_match('/Windows NT ([\d.]+)/i', $userAgent, $matches)) {
            $platform = 'Windows';
            $platformVersion = $matches[1];
        } elseif (preg_match('/Mac OS X ([\d_.]+)/i', $userAgent, $matches)) {
            $platform = 'macOS';
            $platformVersion = str_replace('_', '.', $matches[1]);
        } elseif (preg_match('/Android ([\d.]+)/i', $userAgent, $matches)) {
            $platform = 'Android';
            $platformVersion = $matches[1];
        } elseif (preg_match('/iPhone OS ([\d_]+)/i', $userAgent, $matches)) {
            $platform = 'iOS';
            $platformVersion = str_replace('_', '.', $matches[1]);
        } elseif (preg_match('/iPad.*OS ([\d_]+)/i', $userAgent, $matches)) {
            $platform = 'iPadOS';
            $platformVersion = str_replace('_', '.', $matches[1]);
        } elseif (preg_match('/Linux/i', $userAgent)) {
            $platform = 'Linux';
        } elseif (preg_match('/CrOS/i', $userAgent)) {
            $platform = 'Chrome OS';
        }

        // Detect browser
        if (preg_match('/Edg\/([\d.]+)/i', $userAgent, $matches)) {
            $browser = 'Edge';
            $browserVersion = $matches[1];
        } elseif (preg_match('/OPR\/([\d.]+)/i', $userAgent, $matches)) {
            $browser = 'Opera';
            $browserVersion = $matches[1];
        } elseif (preg_match('/Chrome\/([\d.]+)/i', $userAgent, $matches)) {
            $browser = 'Chrome';
            $browserVersion = $matches[1];
        } elseif (preg_match('/Firefox\/([\d.]+)/i', $userAgent, $matches)) {
            $browser = 'Firefox';
            $browserVersion = $matches[1];
        } elseif (preg_match('/Safari\/([\d.]+)/i', $userAgent) && preg_match('/Version\/([\d.]+)/i', $userAgent, $matches)) {
            $browser = 'Safari';
            $browserVersion = $matches[1];
        }

        // Detect device type
        if (preg_match('/Mobile|Android.*Mobile|iPhone/i', $userAgent)) {
            $deviceType = 'mobile';
        } elseif (preg_match('/iPad|Android(?!.*Mobile)|Tablet/i', $userAgent)) {
            $deviceType = 'tablet';
        }

        return [
            'device_type' => $deviceType,
            'browser' => $browser,
            'browser_version' => $browserVersion,
            'platform' => $platform,
            'platform_version' => $platformVersion,
        ];
    }
}
