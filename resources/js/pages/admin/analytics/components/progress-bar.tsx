export function ProgressBar({ value, max, color = 'bg-violet-600', label }: { value: number; max: number; color?: string; label?: string }) {
    const percentage = max > 0 ? (value / max) * 100 : 0;
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
                <span className="truncate font-medium text-muted-foreground">{label}</span>
                <span className="font-mono text-muted-foreground">{value.toLocaleString()}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
                <div className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}
