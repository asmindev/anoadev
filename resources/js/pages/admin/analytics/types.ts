export interface PageStat {
    path: string;
    count: number;
}

export interface DeviceStat {
    device_type: string;
    count: number;
}

export interface BrowserStat {
    browser: string;
    count: number;
}

export interface PlatformStat {
    platform: string;
    count: number;
}

export interface CountryStat {
    country: string;
    country_code: string;
    count: number;
}

export interface DayStat {
    date: string;
    count: number;
}

export interface RecentVisitor {
    id: number;
    ip_address: string;
    path: string;
    device_type: string | null;
    browser: string | null;
    platform: string | null;
    country: string | null;
    country_code: string | null;
    city: string | null;
    referrer: string | null;
    created_at: string;
}

export interface AnalyticsStats {
    totalVisitors: number;
    uniqueVisitors: number;
    topPages: PageStat[];
    devices: DeviceStat[];
    browsers: BrowserStat[];
    platforms: PlatformStat[];
    countries: CountryStat[];
    visitsPerDay: DayStat[];
}

export interface AnalyticsProps {
    period: string;
    stats: AnalyticsStats;
    recentVisitors: RecentVisitor[];
}
