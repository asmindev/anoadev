import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DayStat } from '../types';

interface TrafficTrendProps {
    visitsPerDay: DayStat[];
}

function formatShortDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
    });
}

function formatLongDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export function TrafficTrend({ visitsPerDay }: TrafficTrendProps) {
    const data = visitsPerDay ?? [];
    const maxDayVisits = Math.max(...data.map((d) => d.count), 1);
    const chartHeight = 180; // px

    return (
        <Card className="border-none shadow-sm ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-border lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between border-b border-border/10 pb-4">
                <div>
                    <CardTitle className="text-lg font-bold">Traffic Trend</CardTitle>
                    <CardDescription>Visitors activity over the selected period</CardDescription>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-violet-600" />
                    <span>Page Views</span>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                {data.length > 0 ? (
                    <div className="overflow-x-auto">
                        <TooltipProvider delayDuration={0}>
                            <div className="flex items-end gap-1 px-2" style={{ height: `${chartHeight + 24}px`, minWidth: `${data.length * 20}px` }}>
                                {data.map((day) => {
                                    const barHeight = Math.max(Math.round((day.count / maxDayVisits) * chartHeight), 4);
                                    return (
                                        <Tooltip key={day.date}>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-1 cursor-default flex-col items-center gap-1" style={{ minWidth: '12px' }}>
                                                    <div
                                                        className="w-full rounded-t-sm bg-gradient-to-t from-violet-600 to-indigo-400 shadow-sm transition-all duration-200 hover:from-violet-500 hover:to-indigo-300 hover:shadow-md hover:shadow-violet-500/20"
                                                        style={{ height: `${barHeight}px` }}
                                                    />
                                                    <span className="hidden text-[9px] font-medium tracking-tighter text-muted-foreground uppercase select-none md:block">
                                                        {formatShortDate(day.date)}
                                                    </span>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="top" className="text-xs">
                                                <p className="font-semibold">{day.count.toLocaleString()} views</p>
                                                <p className="text-muted-foreground">{formatLongDate(day.date)}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        </TooltipProvider>
                    </div>
                ) : (
                    <div className="flex h-48 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
                        No data for the selected period
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
