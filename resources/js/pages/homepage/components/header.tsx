import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme-context';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

interface HeaderProps {
    appName: string;
}

export default function Header({ appName }: HeaderProps) {
    const { isDark, toggleTheme } = useTheme();
    const { url } = usePage();

    const isActive = (path: string) => {
        if (path === '/') {
            return url === '/';
        }
        return url.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex max-w-[70rem] items-center justify-between border-r border-l px-8 py-4">
                <Link href="/" className="font-mono text-2xl font-bold">
                    {appName}
                </Link>
                <nav className="flex items-center gap-6">
                    <Link
                        href="/"
                        className={cn(
                            'relative text-sm font-medium transition-colors hover:text-foreground',
                            isActive('/') ? 'text-foreground' : 'text-muted-foreground',
                        )}
                    >
                        Home
                        {isActive('/') && (
                            <span className="absolute right-0 -bottom-[1.3rem] left-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600" />
                        )}
                    </Link>
                    <Link
                        href="/portfolio"
                        className={cn(
                            'relative text-sm font-medium transition-colors hover:text-foreground',
                            isActive('/portfolio') ? 'text-foreground' : 'text-muted-foreground',
                        )}
                    >
                        Portfolio
                        {isActive('/portfolio') && (
                            <span className="absolute right-0 -bottom-[1.3rem] left-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600" />
                        )}
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            'relative text-sm font-medium transition-colors hover:text-foreground',
                            isActive('/contact') ? 'text-foreground' : 'text-muted-foreground',
                        )}
                    >
                        Contact
                        {isActive('/contact') && (
                            <span className="absolute right-0 -bottom-[1.3rem] left-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600" />
                        )}
                    </Link>
                    <Button onClick={toggleTheme} variant="outline" size="icon" aria-label="Toggle dark mode">
                        {isDark ? (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        ) : (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                    </Button>
                </nav>
            </div>
        </header>
    );
}
