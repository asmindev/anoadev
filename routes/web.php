<?php

use App\Http\Controllers\CompanyProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage/welcome');
})->name('home');

Route::get('/portfolio', PortfolioController::class)->name('portfolio');
// redirect `/admin` or '/dashboard' to the dashboard route
Route::prefix('admin')->name('admin.')->group(function () {
    // Redirects: Menangani /admin dan /dashboard ke /admin/dashboard
    Route::redirect('/', '/admin/dashboard')->name('redirect');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Projects CRUD
    Route::resource('projects', ProjectController::class);

    // Settings - Company Profile
    Route::prefix('settings')->name('settings.')->group(function () {
        Route::get('/', [CompanyProfileController::class, 'edit'])->name('index');
        Route::put('/', [CompanyProfileController::class, 'update'])->name('update');
    });
});

// Redirect global untuk /dashboard (di luar prefix admin)
Route::redirect('/dashboard', '/admin/dashboard')->name('dashboard.redirect');
