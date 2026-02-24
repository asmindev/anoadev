<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateCompanyProfileRequest;
use App\Models\CompanyProfile;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class CompanyProfileController extends Controller
{
    /**
     * Show the settings page with company profile.
     */
    public function edit(): Response
    {
        $profile = CompanyProfile::getInstance();

        return Inertia::render('admin/settings/index', [
            'profile' => $profile,
        ]);
    }

    /**
     * Update the company profile.
     */
    public function update(UpdateCompanyProfileRequest $request): \Illuminate\Http\RedirectResponse
    {
        $profile = CompanyProfile::getInstance();
        $validated = $request->validated();

        if ($request->hasFile('logo')) {
            if ($profile->logo) {
                Storage::disk('public')->delete($profile->logo);
            }
            $validated['logo'] = $request->file('logo')->store('company', 'public');
        }

        $profile->update($validated);

        return redirect()->route('admin.settings.index')
            ->with('success', 'Company profile updated successfully.');
    }
}
