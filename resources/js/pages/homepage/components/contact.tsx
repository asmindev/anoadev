import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CompanyProfile } from '@/types';

interface ContactProps {
    company: CompanyProfile;
}

export default function Contact({ company }: ContactProps) {
    return (
        <section id="contact" className="w-full border-b">
            <div className="relative mx-auto max-w-[70rem] border-r border-l px-6 py-12">
                <div className="absolute top-0 left-0 lg:-left-12">
                    <div className="inline-block">
                        <div className="inline-flex items-center gap-2 border-r border-b px-3 py-2 font-mono text-xl font-bold lg:border-r lg:border-l">
                            <span className="font-medium">04</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-16 space-y-4">
                    <h2 className="font-sans text-2xl font-bold sm:text-3xl">Get In Touch</h2>
                    <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
                        Ready to start your digital transformation? We'd love to hear about your project and discuss how we can help bring your ideas
                        to life.
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <Card className="border-border/40 bg-card/50 transition-colors hover:border-border">
                            <CardContent className="space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600/10">
                                    <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p className="text-sm text-muted-foreground">
                                        {company.city && company.province
                                            ? `${company.city}, ${company.province}, Indonesia`
                                            : 'Kendari, Sulawesi Tenggara, Indonesia'}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/40 bg-card/50 transition-colors hover:border-border">
                            <CardContent className="space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10">
                                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-sm text-muted-foreground">{company.email || 'hello@anoadev.com'}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/40 bg-card/50 transition-colors hover:border-border">
                            <CardContent className="space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10">
                                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p className="text-sm text-muted-foreground">{company.phone || '+62 xxx-xxxx-xxxx'}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Card className="mt-16 border-border/40 bg-card/50 text-center">
                    <CardContent className="space-y-6">
                        <div className="inline-flex items-center gap-2">
                            <Badge variant="outline" className="font-mono text-xs">
                                <span className="text-violet-600">ContactForm</span>
                                <span className="text-muted-foreground">.</span>
                                <span className="text-amber-600">tsx</span>
                            </Badge>
                            <span className="text-xs text-muted-foreground">ready to submit</span>
                        </div>
                        <h3 className="text-xl font-semibold sm:text-2xl">Let's Build Something Amazing Together</h3>
                        <p className="text-lg font-medium">We're excited to work with you on your next project.</p>
                        <div className="pt-4">
                            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                                <a href={`mailto:${company.email || 'hello@anoadev.com'}`}>Contact Us</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
