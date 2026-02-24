<?php

namespace App\Http\Middleware;

use App\Models\CompanyProfile;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        $company = CompanyProfile::getInstance();

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'company' => [
                'name' => $company->name,
                'tagline' => $company->tagline,
                'description' => $company->description,
                'logo' => $company->logo,
                'email' => $company->email,
                'phone' => $company->phone,
                'whatsapp' => $company->whatsapp,
                'address' => $company->address,
                'city' => $company->city,
                'province' => $company->province,
                'website' => $company->website,
                'instagram' => $company->instagram,
                'github' => $company->github,
                'linkedin' => $company->linkedin,
                'facebook' => $company->facebook,
                'twitter' => $company->twitter,
            ],
        ];
    }
}
