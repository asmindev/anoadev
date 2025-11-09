import { Link } from '@inertiajs/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border/40 py-12">
            <div className="mx-auto max-w-[70rem] border-r border-l px-6">
                <div className="flex flex-col items-center justify-between gap-4 border-b border-border/40 pb-8 sm:flex-row">
                    <p className="text-sm text-muted-foreground">Copyright © {currentYear} AnoadDev.</p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/portfolio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                            Portfolio
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                            Contact
                        </Link>
                        <a
                            href="https://instagram.com/anoadev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://github.com/anoadev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <h1 className="font-inter text-[4.5rem] font-black text-muted-foreground/50 select-none sm:text-[12rem]">ANOADEV</h1>
                </div>
            </div>
        </footer>
    );
}
