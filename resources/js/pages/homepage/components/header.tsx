import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/theme-context';
import { cn } from '@/lib/utils';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react';

interface HeaderProps {
    appName: string;
}

const navLinks = [
    { href: '/', label: 'Home', exact: true },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
];

export default function Header({ appName }: HeaderProps) {
    const { isDark, toggleTheme } = useTheme();
    const { url, props } = usePage<SharedData>();
    const { company } = props;

    const isActive = (href: string, exact = false) => {
        if (exact) {
            return url === href;
        }
        return url.startsWith(href);
    };

    const logoSrc = company?.logo ? (company.logo.startsWith('http') ? company.logo : `/storage/${company.logo}`) : null;

    const Logo = () =>
        logoSrc ? (
            <img src={logoSrc} alt={company?.name ?? appName} className="h-8 w-auto object-contain dark:invert" />
        ) : (
            <span className="font-mono text-xl font-bold tracking-tight">{company?.name ?? appName}</span>
        );

    const ThemeToggle = () => (
        <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label="Toggle dark mode" className="shrink-0">
            {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </Button>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex max-w-[70rem] items-center justify-between border-r border-l px-6 py-3 md:px-8 md:py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map(({ href, label, exact }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'relative text-sm font-medium transition-colors hover:text-foreground',
                                isActive(href, exact) ? 'text-foreground' : 'text-muted-foreground',
                            )}
                        >
                            {label}
                            {isActive(href, exact) && (
                                <span className="absolute right-0 -bottom-[1.05rem] left-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600" />
                            )}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile: theme toggle + hamburger */}
                <div className="flex items-center gap-1 md:hidden">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <MenuIcon className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72 p-0">
                            <div className="flex h-full flex-col">
                                {/* Sheet Header */}
                                <div className="flex items-center border-b border-border px-6 py-4">
                                    <Link href="/" className="flex items-center gap-2">
                                        <Logo />
                                    </Link>
                                </div>

                                {/* Nav Links */}
                                <nav className="flex flex-col gap-1 p-4">
                                    {navLinks.map(({ href, label, exact }) => (
                                        <SheetClose asChild key={href}>
                                            <Link
                                                href={href}
                                                className={cn(
                                                    'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                                                    isActive(href, exact)
                                                        ? 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300'
                                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                                                )}
                                            >
                                                {isActive(href, exact) && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />}
                                                {label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
