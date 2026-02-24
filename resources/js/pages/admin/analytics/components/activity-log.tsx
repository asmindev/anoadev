import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Monitor, Smartphone, Tablet, Users } from 'lucide-react';
import { RecentVisitor } from '../types';

interface ActivityLogProps {
    recentVisitors: RecentVisitor[];
}

const deviceIcons: Record<string, React.ReactNode> = {
    desktop: <Monitor className="h-4 w-4" />,
    mobile: <Smartphone className="h-4 w-4" />,
    tablet: <Tablet className="h-4 w-4" />,
};

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

function timeAgo(dateString: string): string {
    const diff = Date.now() - new Date(dateString).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

export function ActivityLog({ recentVisitors }: ActivityLogProps) {
    return (
        <Card className="border-none shadow-sm ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-border">
            <CardHeader className="border-b border-border/10 pb-4">
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-xl font-bold">Activity Log</CardTitle>
                    <CardDescription>Latest interactions across your platform</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border/10 bg-muted/30 text-left text-xs tracking-widest text-muted-foreground/70 uppercase">
                                <th className="px-6 py-4 font-bold">Visitor Info</th>
                                <th className="px-6 py-4 font-bold">Target Path</th>
                                <th className="hidden px-6 py-4 font-bold md:table-cell">Details</th>
                                <th className="px-6 py-4 text-right font-bold">Activity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/10">
                            {recentVisitors.length > 0 ? (
                                recentVisitors.map((visitor) => (
                                    <tr key={visitor.id} className="group transition-colors hover:bg-muted/30">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-muted to-muted/50 shadow-inner transition-all group-hover:from-violet-500/10 group-hover:to-indigo-500/10">
                                                    <Users className="h-4 w-4 text-muted-foreground group-hover:text-violet-600" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-mono text-xs font-bold tracking-tight">{visitor.ip_address}</span>
                                                    <span className="text-[10px] text-muted-foreground">
                                                        {visitor.city ? `${visitor.city}, ` : ''}
                                                        {visitor.country || 'Unknown Location'}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className="max-w-[200px] self-start truncate rounded-md bg-violet-500/5 px-2 py-0.5 font-mono text-[11px] font-semibold text-violet-600">
                                                    {visitor.path}
                                                </span>
                                                <span className="text-[9px] font-bold tracking-wider text-muted-foreground/60 uppercase">
                                                    Referrer: {visitor.referrer ? new URL(visitor.referrer).hostname : 'Direct Visit'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="hidden px-6 py-4 md:table-cell">
                                            <div className="flex flex-wrap gap-2">
                                                {visitor.device_type && (
                                                    <span className="inline-flex items-center gap-1 rounded bg-muted/60 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                                                        {deviceIcons[visitor.device_type]} {visitor.device_type}
                                                    </span>
                                                )}
                                                {visitor.browser && (
                                                    <span className="rounded bg-muted/60 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                                                        {visitor.browser}
                                                    </span>
                                                )}
                                                {visitor.platform && (
                                                    <span className="rounded bg-muted/60 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                                                        {visitor.platform}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex flex-col items-end gap-0.5">
                                                <span className="text-xs font-bold tracking-tight">{timeAgo(visitor.created_at)}</span>
                                                <span className="text-[10px] font-medium text-muted-foreground">
                                                    {formatDate(visitor.created_at).split(',')[1]}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-20 text-center text-muted-foreground">
                                        <div className="flex flex-col items-center gap-2">
                                            <Activity className="h-8 w-8 text-muted/30" />
                                            <p className="font-medium tracking-tight">No activity logs recorded for this period.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
