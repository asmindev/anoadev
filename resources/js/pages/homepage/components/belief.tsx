export default function Belief() {
    const values = [
        {
            title: 'Innovation',
            description: 'We embrace new technologies and creative solutions to deliver cutting-edge products that meet modern business needs.',
        },
        {
            title: 'Quality First',
            description: 'Every project we undertake is built with attention to detail, ensuring reliability, performance, and user satisfaction.',
        },
        {
            title: 'Client Partnership',
            description: 'We work closely with our clients, understanding their vision and goals to deliver solutions that truly make an impact.',
        },
        {
            title: 'Continuous Learning',
            description: 'We stay updated with the latest industry trends and technologies to provide the most effective and modern solutions.',
        },
    ];

    return (
        <section id="belief" className="w-full border-b">
            <div className="relative mx-auto max-w-[70rem] border-r border-l px-6 py-12">
                <div className="absolute top-0 left-0 lg:-left-12">
                    <div className="inline-block">
                        <div className="inline-flex items-center gap-2 border-r border-b px-3 py-2 font-mono text-xl font-bold lg:border-r lg:border-l">
                            <span className="font-medium">03</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-16 space-y-4">
                    <h2 className="font-sans text-2xl font-bold sm:text-3xl">Our Values</h2>
                    <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
                        The principles that guide us in creating exceptional digital solutions:
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {values.map((value, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600/10">
                                    <div className="h-2 w-2 rounded-full bg-violet-600" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-lg font-semibold">{value.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
