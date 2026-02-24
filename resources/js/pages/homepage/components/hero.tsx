import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CompanyProfile } from '@/types';
import { useEffect, useState } from 'react';

interface HeroProps {
    company: CompanyProfile;
}

export default function Hero({ company }: HeroProps) {
    const [text, setText] = useState('');
    const fullText = company.tagline || 'Your Digital Partner in Kendari';
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
                setTypingSpeed(2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            } else {
                setTypingSpeed(isDeleting ? 50 : 150);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, fullText]);

    return (
        <section className="border-b">
            <div className="relative mx-auto flex h-full max-w-[70rem] items-center justify-center border-r border-l px-6 py-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 opacity-20 blur-3xl">
                        <div className="h-full w-full bg-gradient-to-r from-violet-600 to-indigo-600" />
                    </div>
                </div>
                <div className="mx-auto w-full max-w-5xl py-8 text-center">
                    <div className="mb-8 inline-block">
                        <Badge variant="outline" className="gap-2 border-border/40 bg-muted/50 px-3 py-1">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
                            </span>
                            <span className="font-mono text-xs">
                                {company.city && company.province ? `${company.city}, ${company.province}` : 'Kendari, Sulawesi Tenggara'}
                            </span>
                        </Badge>
                    </div>
                    <h1 className="mb-6 font-mono text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">{company.name.toUpperCase()}</h1>
                    <span className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text font-mono text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                        {text}
                        <span className="animate-pulse">|</span>
                    </span>
                    <div className="mx-auto mt-8 max-w-3xl space-y-6">
                        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                            Transforming ideas into powerful digital experiences. From innovative web and mobile applications to comprehensive
                            business solutions.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                            <Badge variant="outline" className="border-border/40 bg-muted/30">
                                Web Apps
                            </Badge>
                            <Badge variant="outline" className="border-border/40 bg-muted/30">
                                Mobile Apps
                            </Badge>
                            <Badge variant="outline" className="border-border/40 bg-muted/30">
                                POS Systems
                            </Badge>
                            <Badge variant="outline" className="border-border/40 bg-muted/30">
                                ERP Solutions
                            </Badge>
                            <Badge variant="outline" className="border-border/40 bg-muted/30">
                                Design
                            </Badge>
                        </div>
                        <div className="pt-4">
                            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                                <a href="#contact">
                                    Start Your Project
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
