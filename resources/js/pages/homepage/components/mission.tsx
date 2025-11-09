export default function Mission() {
    return (
        <section id="about" className="w-full border-b">
            <div className="relative mx-auto max-w-[70rem] border-r border-l px-6 py-12">
                <div className="absolute top-0 left-0 lg:-left-12">
                    <div className="inline-block">
                        <div className="inline-flex items-center gap-2 border-r border-b px-3 py-2 font-mono text-xl font-bold lg:border-r lg:border-l">
                            <span className="font-medium">02</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-16 space-y-4">
                    <h2 className="font-sans text-2xl font-bold sm:text-3xl">About AnoadDev</h2>
                    <div className="flex items-start gap-8">
                        <div className="flex-1 space-y-4">
                            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                AnoadDev is a newly established digital solutions provider based in Kendari, Sulawesi Tenggara, Indonesia. We are
                                passionate about creating innovative digital products that help businesses transform and grow in the digital era.
                            </p>
                            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Although we are just starting our journey, we bring fresh perspectives and modern approaches to web development,
                                mobile applications, point of sale systems, company profiles, ERP solutions, and design services.
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-md border border-border/40 bg-muted/50 px-3 py-2 font-mono text-xs">
                                <span className="text-emerald-600">location</span>
                                <span className="text-muted-foreground">:</span>
                                <span className="ml-2 text-violet-600">Kendari, Sulawesi Tenggara</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-sm font-medium text-muted-foreground">Our Focus Areas</h3>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {[
                            'Web Development',
                            'Mobile Apps',
                            'POS Systems',
                            'Company Profile',
                            'ERP Solutions',
                            'UI/UX Design',
                            'Branding',
                            'Consulting',
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center rounded-lg border border-border/40 bg-card/50 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
