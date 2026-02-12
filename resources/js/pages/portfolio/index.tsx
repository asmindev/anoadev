import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/pages/homepage/components/footer';
import Header from '@/pages/homepage/components/header';
import { Head, Link } from '@inertiajs/react';
import { Calendar, User } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description: string;
    image: string | null;
    client_id: number;
    status: string;
    start_date: string | null;
    end_date: string | null;
    created_at: string;
    updated_at: string;
}

interface PortfolioProps {
    projects: Project[];
    appName: string;
}

export default function Portfolio({ projects, appName }: PortfolioProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <Head title="Portfolio" />
            <Header appName={appName} />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-muted py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Our Completed Projects
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Showcasing our best work and successful collaborations. Explore the solutions we've built for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
                    {projects.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <Card
                                    key={project.id}
                                    className="flex h-full flex-col gap-0 overflow-hidden p-0 transition-all hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-primary/10"
                                >
                                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                        {project.image ? (
                                            <img
                                                src={`/storage/${project.image}`}
                                                alt={project.name}
                                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center bg-secondary text-muted-foreground">
                                                No Image Available
                                            </div>
                                        )}
                                        <Badge className="absolute top-2 right-2" variant="secondary">
                                            Completed
                                        </Badge>
                                    </div>
                                    <CardHeader className="p-6 pb-2">
                                        <CardTitle className="line-clamp-1">{project.name}</CardTitle>
                                        <CardDescription className="line-clamp-2">
                                            {project.description || 'No description provided.'}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 p-6 pt-2">
                                        <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                                            {project.end_date && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{new Date(project.end_date).toLocaleDateString()}</span>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-[400px] animate-in flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center fade-in-50">
                            <div className="rounded-full bg-secondary p-4">
                                <User className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold">No Projects Showcased Yet</h3>
                            <p className="max-w-md text-muted-foreground">
                                We are currently working on amazing projects. Check back soon to see our portfolio updates!
                            </p>
                            <Link href="/">
                                <Button variant="outline">Return Home</Button>
                            </Link>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
