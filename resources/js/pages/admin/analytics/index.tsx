import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminLayout from '@/layouts/admin-layout';
import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { ActivityLog } from './components/activity-log';
import { QuickInsights } from './components/quick-insights';
import { SoftwareProfile } from './components/software-profile';
import { StatCards } from './components/stat-cards';
import { TopPages } from './components/top-pages';
import { TrafficTrend } from './components/traffic-trend';
import { AnalyticsProps } from './types';

export default function Analytics({ period, stats, recentVisitors }: AnalyticsProps) {
    const { auth } = usePage<SharedData>().props;

    const handlePeriodChange = (value: string) => {
        router.get(route('admin.analytics'), { period: value }, { preserveState: true, preserveScroll: true });
    };

    return (
        <AdminLayout user={auth.user}>
            <div className="space-y-8 pb-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">Analytics</h1>
                        <p className="text-muted-foreground">Detailed insights into your website's performance and audience.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-muted-foreground">Timeframe:</span>
                        <Select value={period} onValueChange={handlePeriodChange}>
                            <SelectTrigger className="w-[160px] bg-background shadow-sm hover:bg-accent/50">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="today">Today</SelectItem>
                                <SelectItem value="week">Last 7 Days</SelectItem>
                                <SelectItem value="month">Last 30 Days</SelectItem>
                                <SelectItem value="year">Last Year</SelectItem>
                                <SelectItem value="all">All Time</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Stats Overview */}
                <StatCards stats={stats} />

                {/* Main section: Chart + Sidebar Stats */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <TrafficTrend visitsPerDay={stats.visitsPerDay} />
                    <QuickInsights devices={stats.devices} countries={stats.countries} />
                </div>

                {/* Bottom Row: Top Pages + Browsers/Platforms */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <TopPages topPages={stats.topPages} />
                    <SoftwareProfile browsers={stats.browsers} platforms={stats.platforms} />
                </div>

                {/* Recent Visitors Table */}
                <ActivityLog recentVisitors={recentVisitors} />
            </div>
        </AdminLayout>
    );
}
