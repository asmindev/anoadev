import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme-context';
import { Link } from '@inertiajs/react';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex max-w-[70rem] items-center justify-between border-r border-l px-8 py-4">
                <Link href="/" className="font-mono text-2xl font-bold">
                    0DEV
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Home
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                        Contact
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
