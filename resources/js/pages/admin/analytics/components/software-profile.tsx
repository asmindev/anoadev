import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrowserStat, PlatformStat } from '../types';
import { ProgressBar } from './progress-bar';

interface SoftwareProfileProps {
    browsers: BrowserStat[];
    platforms: PlatformStat[];
}

const barColors = ['bg-violet-600', 'bg-indigo-600', 'bg-purple-600', 'bg-pink-600', 'bg-sky-600'];

export function SoftwareProfile({ browsers, platforms }: SoftwareProfileProps) {
    const browserData = browsers ?? [];
    const platformData = platforms ?? [];
    const maxBrowserCount = Math.max(...browserData.map((b) => b.count), 1);
    const maxPlatformCount = Math.max(...platformData.map((p) => p.count), 1);

    return (
        <Card className="border-none shadow-sm ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-border">
            <CardHeader className="border-b border-border/10 pb-4">
                <CardTitle className="text-lg font-bold">Software Profile</CardTitle>
                <CardDescription>Tech stack of your audience</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-extrabold tracking-[0.2em] text-muted-foreground/60 uppercase">Browsers</h4>
                        <div className="space-y-4">
                            {browserData.slice(0, 5).map((browser, i) => (
                                <ProgressBar
                                    key={browser.browser}
                                    value={browser.count}
                                    max={maxBrowserCount}
                                    label={browser.browser}
                                    color={barColors[i % barColors.length]}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4 border-t border-border/10 pt-6">
                        <h4 className="text-[10px] font-extrabold tracking-[0.2em] text-muted-foreground/60 uppercase">Operating Systems</h4>
                        <div className="space-y-4">
                            {platformData.slice(0, 5).map((platform, i) => (
                                <ProgressBar
                                    key={platform.platform}
                                    value={platform.count}
                                    max={maxPlatformCount}
                                    label={platform.platform}
                                    color={barColors[(i + 2) % barColors.length]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
