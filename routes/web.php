<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage/welcome', [
        'appName' => config('app.name'),
    ]);
})->name('home');
