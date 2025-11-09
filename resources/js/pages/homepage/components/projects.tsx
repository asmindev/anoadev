import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Projects() {
    return (
        <section id="services" className="w-full border-b">
            <div className="relative mx-auto max-w-[70rem] border-r border-l px-6 py-12">
                <div className="absolute top-0 left-0 lg:-left-12">
                    <div className="inline-block">
                        <div className="inline-flex items-center gap-2 border-r border-b px-3 py-2 font-mono text-xl font-bold lg:border-r lg:border-l">
                            <span className="font-medium">01</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-16 space-y-4">
                    <h2 className="font-sans text-2xl font-bold sm:text-3xl">Our Services</h2>
                    <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                        We offer comprehensive digital solutions to help your business grow and succeed in the digital era.
                    </p>
                    <Badge variant="outline" className="font-mono text-sm">
                        <span className="text-violet-600">services</span>
                        <span>.</span>
                        <span className="text-amber-600">json</span>
                    </Badge>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group relative overflow-hidden border-border/40 bg-card p-0 transition-all hover:border-border hover:shadow-lg">
                        <CardContent className="relative z-10 space-y-3 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600/10">
                                <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">Web Applications</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Modern, responsive web applications built with latest technologies
                            </p>
                        </CardContent>
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                    </Card>

                    <Card className="group relative overflow-hidden border-border/40 bg-card p-0 transition-all hover:border-border hover:shadow-lg">
                        <CardContent className="relative z-10 space-y-3 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">Mobile Apps</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Native and cross-platform mobile applications for iOS and Android
                            </p>
                        </CardContent>
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                    </Card>

                    <Card className="group relative overflow-hidden border-border/40 bg-card p-0 transition-all hover:border-border hover:shadow-lg">
                        <CardContent className="relative z-10 space-y-3 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10">
                                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">POS Systems</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Complete point of sale solutions for retail and F&B businesses
                            </p>
                        </CardContent>
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                    </Card>

                    <Card className="group relative overflow-hidden border-border/40 bg-card p-0 transition-all hover:border-border hover:shadow-lg">
                        <CardContent className="relative z-10 space-y-3 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">Company Profile</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Professional company websites to boost your online presence
                            </p>
                        </CardContent>
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                    </Card>

                    <Card className="group relative overflow-hidden border-border/40 bg-card p-0 transition-all hover:border-border hover:shadow-lg">
                        <CardContent className="relative z-10 space-y-3 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600/10">
                                <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">ERP Solutions</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Enterprise resource planning systems tailored to your needs
                            </p>
                        </CardContent>
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                    </Card>

                    <Card className="group relative overflow-hidden border-border/40 bg-card p-0 transition-all hover:border-border hover:shadow-lg">
                        <CardContent className="relative z-10 space-y-3 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-600/10">
                                <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">Design Services</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">UI/UX design, branding, and graphic design services</p>
                        </CardContent>
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                    </Card>
                </div>
            </div>
        </section>
    );
}
