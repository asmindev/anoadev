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
                <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
                    {/* Gradient background blobs */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
                        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />
                    </div>

                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-10 shadow-lg ring-1 ring-white/10 backdrop-blur-xl sm:px-12 sm:py-14 dark:border-white/10 dark:bg-white/5">
                                <div className="space-y-4">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Get In Touch</h1>
                                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Feel free to reach out to us through any of the channels below. We'd love to hear from you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info Section */}
                <section className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
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
