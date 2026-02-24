import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Activity, Eye, Globe, Users } from 'lucide-react';
import { AnalyticsStats } from '../types';

interface StatCardsProps {
    stats: AnalyticsStats;
}

export function StatCards({ stats }: StatCardsProps) {
    const items = [
        {
            label: 'Total Page Views',
            value: stats.totalVisitors,
            icon: Eye,
            color: 'text-violet-600',
            bg: 'bg-violet-600/10',
        },
        {
            label: 'Unique Visitors',
            value: stats.uniqueVisitors,
            icon: Users,
            color: 'text-indigo-600',
            bg: 'bg-indigo-600/10',
        },
        {
            label: 'Top Page View',
            value: stats.topPages[0]?.path || '-',
            icon: Activity,
            color: 'text-purple-600',
            bg: 'bg-purple-600/10',
            isText: true,
        },
        {
            label: 'Top Country',
            value: stats.countries[0]?.country || '-',
            icon: Globe,
            color: 'text-pink-600',
            bg: 'bg-pink-600/10',
            isText: true,
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((stat, i) => (
                <Card
                    key={i}
                    className="overflow-hidden border-none bg-card/50 shadow-sm ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-border"
                >
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{stat.label}</span>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.bg}`}>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className={`truncate text-2xl font-bold tracking-tight ${stat.isText ? 'text-lg' : ''}`}>
                            {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                        </div>
                        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted/30">
                            <div
                                className={`h-full rounded-full ${stat.bg.replace('/10', '')} transition-all duration-1000 ease-out`}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
