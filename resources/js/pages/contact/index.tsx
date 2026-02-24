import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/pages/homepage/components/footer';
import Header from '@/pages/homepage/components/header';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Facebook, Github, Globe, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react';

export default function Contact() {
    const { company } = usePage<SharedData>().props;

    const location =
        company.city && company.province
            ? `${company.address ? company.address + ', ' : ''}${company.city}, ${company.province}, Indonesia`
            : company.address || 'Indonesia';

    const contactItems = [
        {
            icon: <Mail className="h-6 w-6 text-violet-600" />,
            label: 'Email',
            value: company.email,
            href: company.email ? `mailto:${company.email}` : null,
            bgColor: 'bg-violet-600/10',
        },
        {
            icon: <Phone className="h-6 w-6 text-indigo-600" />,
            label: 'Phone',
            value: company.phone,
            href: company.phone ? `tel:${company.phone}` : null,
            bgColor: 'bg-indigo-600/10',
        },
        {
            icon: <MessageCircle className="h-6 w-6 text-green-600" />,
            label: 'WhatsApp',
            value: company.whatsapp,
            href: company.whatsapp ? `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}` : null,
            bgColor: 'bg-green-600/10',
        },
        {
            icon: <MapPin className="h-6 w-6 text-rose-600" />,
            label: 'Address',
            value: location,
            href: null,
            bgColor: 'bg-rose-600/10',
        },
        {
            icon: <Globe className="h-6 w-6 text-sky-600" />,
            label: 'Website',
            value: company.website,
            href: company.website,
            bgColor: 'bg-sky-600/10',
        },
    ];

    const socialItems = [
        {
            icon: <Instagram className="h-6 w-6" />,
            label: 'Instagram',
            value: company.instagram,
            href: company.instagram,
            bgColor: 'bg-pink-600/10',
            textColor: 'text-pink-600',
        },
        {
            icon: <Github className="h-6 w-6" />,
            label: 'GitHub',
            value: company.github,
            href: company.github,
            bgColor: 'bg-gray-600/10',
            textColor: 'text-gray-600 dark:text-gray-400',
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            label: 'LinkedIn',
            value: company.linkedin,
            href: company.linkedin,
            bgColor: 'bg-blue-600/10',
            textColor: 'text-blue-600',
        },
        {
            icon: <Facebook className="h-6 w-6" />,
            label: 'Facebook',
            value: company.facebook,
            href: company.facebook,
            bgColor: 'bg-blue-700/10',
            textColor: 'text-blue-700',
        },
        {
            icon: <Twitter className="h-6 w-6" />,
            label: 'Twitter / X',
            value: company.twitter,
            href: company.twitter,
            bgColor: 'bg-sky-500/10',
            textColor: 'text-sky-500',
        },
    ];

    const availableSocials = socialItems.filter((item) => item.value);

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <Head title="Contact" />
            <Header appName={company.name} />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
                    {/* Animated gradient background blobs */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/4 -left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-violet-500/30 to-purple-500/20 blur-3xl" />
                        <div className="animation-delay-2000 absolute top-1/3 -right-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-bl from-indigo-500/30 to-blue-500/20 blur-3xl" />
                        <div className="animation-delay-4000 absolute bottom-10 left-1/3 h-80 w-80 animate-pulse rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/15 blur-3xl" />
                    </div>

                    {/* Grid pattern background */}
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] bg-[size:4rem_4rem]" />

                    {/* Dot pattern overlay */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_hsl(var(--background))_100%)]" />

                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-8 text-center">
                            {/* Main glass card */}
                            <div className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-8 py-12 shadow-2xl ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-violet-500/10 sm:px-16 sm:py-16 dark:border-white/10 dark:from-white/5 dark:via-white/[0.02] dark:shadow-violet-500/5">
                                {/* Shine effect */}
                                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-violet-500/0 via-violet-500/5 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="relative space-y-6">
                                    {/* Decorative element */}
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20">
                                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>

                                    <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                                        Get In Touch
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-base text-muted-foreground/90 sm:text-lg md:text-xl">
                                        Feel free to reach out to us through any of the channels below. We'd love to hear from you and discuss how we
                                        can help.
                                    </p>

                                    {/* Floating badges */}
                                    <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                                        <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-600 backdrop-blur-sm dark:text-violet-400">
                                            Available 24/7
                                        </div>
                                        <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-600 backdrop-blur-sm dark:text-indigo-400">
                                            Quick Response
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info Section */}
                <section className="relative container px-4 py-12 md:px-6 md:py-24 lg:py-32">
                    {/* Subtle grid background for this section */}
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

                    <div className="mx-auto max-w-4xl space-y-16">
                        {/* Contact Details */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {contactItems.map(
                                    (item) =>
                                        item.value && (
                                            <Card key={item.label} className="border-border/40 bg-card/50 transition-colors hover:border-border">
                                                <CardContent className="space-y-3">
                                                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bgColor}`}>
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                                                        {item.href ? (
                                                            <a
                                                                href={item.href}
                                                                target={
                                                                    item.href.startsWith('mailto:') || item.href.startsWith('tel:')
                                                                        ? undefined
                                                                        : '_blank'
                                                                }
                                                                rel="noopener noreferrer"
                                                                className="font-semibold text-foreground transition-colors hover:text-violet-600"
                                                            >
                                                                {item.value}
                                                            </a>
                                                        ) : (
                                                            <p className="font-semibold">{item.value}</p>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ),
                                )}
                            </div>
                        </div>

                        {/* Social Media Section */}
                        {availableSocials.length > 0 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold tracking-tight">Social Media</h2>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {availableSocials.map((item) => (
                                        <a key={item.label} href={item.href!} target="_blank" rel="noopener noreferrer" className="group block">
                                            <Card className="border-border/40 bg-card/50 transition-all group-hover:border-border group-hover:shadow-md">
                                                <CardContent className="flex items-center gap-4">
                                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${item.bgColor}`}>
                                                        <span className={item.textColor}>{item.icon}</span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-semibold">{item.label}</p>
                                                        <p className="truncate text-sm text-muted-foreground">
                                                            {item.value!.replace(/^https?:\/\/(www\.)?/, '')}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer company={company} />
        </div>
    );
}
