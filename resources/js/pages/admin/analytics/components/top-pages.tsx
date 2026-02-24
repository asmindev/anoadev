import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageStat } from '../types';

interface TopPagesProps {
    topPages: PageStat[];
}

export function TopPages({ topPages }: TopPagesProps) {
    const data = topPages ?? [];
    const maxPageViews = Math.max(...data.map((p) => p.count), 1);

    return (
        <Card className="border-none shadow-sm ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-border lg:col-span-2">
            <CardHeader className="border-b border-border/10 pb-4">
                <CardTitle className="text-lg font-bold">Top Pages</CardTitle>
                <CardDescription>Pages receiving the most traffic</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="divide-y divide-border/10">
                    {data.length > 0 ? (
                        data.map((page, i) => (
                            <div key={page.path} className="group/item flex items-center justify-between py-4">
                                <div className="flex flex-1 items-center gap-4">
                                    <span className="w-4 font-mono text-xs font-bold text-muted-foreground/40">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="cursor-default text-sm font-semibold tracking-tight transition-colors group-hover/item:text-violet-600">
                                            {page.path}
                                        </span>
                                        <div className="mt-1 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover/item:w-full" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="hidden sm:block">
                                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted/50">
                                            <div
                                                className="h-full rounded-full bg-violet-600/40"
                                                style={{ width: `${(page.count / maxPageViews) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-mono text-sm font-bold">{page.count.toLocaleString()}</p>
                                        <p className="text-[10px] font-bold tracking-wider text-muted-foreground/50 uppercase">Hits</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="py-8 text-center text-sm text-muted-foreground">No data for the selected period</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
