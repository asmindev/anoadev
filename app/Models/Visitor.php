<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    use HasFactory;

    /** @var list<string> */
    protected $fillable = [
        'ip_address',
        'path',
        'method',
        'device_type',
        'browser',
        'browser_version',
        'platform',
        'platform_version',
        'country',
        'country_code',
        'city',
        'referrer',
        'user_agent',
    ];

    /**
     * Scope to filter by date range.
     *
     * @param  \Illuminate\Database\Eloquent\Builder<static>  $query
     * @return \Illuminate\Database\Eloquent\Builder<static>
     */
    public function scopePeriod($query, string $period): mixed
    {
        return match ($period) {
            'today' => $query->whereDate('created_at', today()),
            'week' => $query->where('created_at', '>=', now()->subWeek()),
            'month' => $query->where('created_at', '>=', now()->subMonth()),
            'year' => $query->where('created_at', '>=', now()->subYear()),
            default => $query,
        };
    }
}
