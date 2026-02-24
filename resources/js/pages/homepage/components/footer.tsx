import { CompanyProfile } from '@/types';
import { Link } from '@inertiajs/react';

interface FooterProps {
    company?: CompanyProfile;
}

export default function Footer({ company }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const companyName = company?.name || 'AnoadDev';

    return (
        <footer className="w-full border-t border-border/40 py-12">
            <div className="mx-auto max-w-[70rem] border-r border-l px-6">
                <div className="flex flex-col items-center justify-between gap-4 border-b border-border/40 pb-8 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        Copyright © {currentYear} {companyName}.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/portfolio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                            Portfolio
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                            Contact
                        </Link>
                        {company?.instagram && (
                            <a
                                href={company.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Instagram
                            </a>
                        )}
                        {company?.github && (
                            <a
                                href={company.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                GitHub
                            </a>
                        )}
                        {company?.linkedin && (
                            <a
                                href={company.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                LinkedIn
                            </a>
                        )}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <h1 className="font-inter text-[4.5rem] font-black text-muted-foreground/50 select-none sm:text-[12rem]">
                        {companyName.toUpperCase()}
                    </h1>
                </div>
            </div>
        </footer>
    );
}
