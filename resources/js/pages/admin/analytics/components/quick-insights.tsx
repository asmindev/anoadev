import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Monitor } from 'lucide-react';
import { CountryStat, DeviceStat } from '../types';
import { ProgressBar } from './progress-bar';

interface QuickInsightsProps {
    devices: DeviceStat[];
    countries: CountryStat[];
}

const barColors = ['bg-violet-600', 'bg-indigo-600', 'bg-purple-600', 'bg-pink-600', 'bg-sky-600'];

export function QuickInsights({ devices, countries }: QuickInsightsProps) {
    const deviceData = devices ?? [];
    const countryData = countries ?? [];
    const maxDeviceCount = Math.max(...deviceData.map((d) => d.count), 1);
    const maxCountryCount = Math.max(...countryData.map((c) => c.count), 1);

    return (
        <Card className="border-none shadow-sm ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-border">
            <CardHeader className="border-b border-border/10 pb-4">
                <CardTitle className="text-lg font-bold">Quick Insights</CardTitle>
                <CardDescription>Audience characteristics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
                {/* Devices */}
                <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground/80 uppercase">
                        <Monitor className="h-3 w-3" />
                        Devices
                    </h4>
                    <div className="space-y-4">
                        {deviceData.map((device, i) => (
                            <ProgressBar
                                key={device.device_type}
                                value={device.count}
                                max={maxDeviceCount}
                                label={device.device_type.charAt(0).toUpperCase() + device.device_type.slice(1)}
                                color={barColors[i % barColors.length]}
                            />
                        ))}
                    </div>
                </div>

                {/* Countries */}
                <div className="space-y-4">
                    <h4 className="flex items-center gap-2 border-t border-border/10 pt-2 text-xs font-bold tracking-widest text-muted-foreground/80 uppercase">
                        <Globe className="h-3 w-3" />
                        Locations
                    </h4>
                    <div className="space-y-4">
                        {countryData.slice(0, 5).map((country) => (
                            <div key={country.country_code} className="flex items-center justify-between gap-4">
                                <div className="flex min-w-0 flex-1 items-center gap-3">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-muted/50 text-[10px] font-bold text-muted-foreground">
                                        {country.country_code}
                                    </div>
                                    <span className="truncate text-sm font-medium">{country.country}</span>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <span className="font-mono text-xs font-bold">{country.count}</span>
                                    <div className="h-1.5 w-12 overflow-hidden rounded-full bg-muted/50">
                                        <div
                                            className="h-full rounded-full bg-pink-500"
                                            style={{ width: `${(country.count / maxCountryCount) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
