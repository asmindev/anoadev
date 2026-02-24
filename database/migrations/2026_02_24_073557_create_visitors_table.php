<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('visitors', function (Blueprint $table) {
            $table->id();
            $table->string('ip_address', 45);
            $table->string('path')->default('/');
            $table->string('method', 10)->default('GET');
            $table->string('device_type', 20)->nullable(); // desktop, laptop, tablet, mobile
            $table->string('browser', 50)->nullable();
            $table->string('browser_version', 20)->nullable();
            $table->string('platform', 50)->nullable(); // Windows, macOS, Linux, Android, iOS
            $table->string('platform_version', 20)->nullable();
            $table->string('country', 100)->nullable();
            $table->string('country_code', 5)->nullable();
            $table->string('city', 100)->nullable();
            $table->string('referrer')->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamps();

            $table->index('ip_address');
            $table->index('path');
            $table->index('device_type');
            $table->index('country_code');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visitors');
    }
};
