import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
}

interface Project {
    id: number;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'on_hold' | 'cancelled';
    budget: string;
    start_date: string;
    end_date: string;
    client: Client;
    created_at: string;
    updated_at: string;
}

interface ProjectShowProps {
    project: Project;
}

const statusColors = {
    active: 'bg-green-100 text-green-700 border-green-200',
    completed: 'bg-blue-100 text-blue-700 border-blue-200',
    on_hold: 'bg-orange-100 text-orange-700 border-orange-200',
    cancelled: 'bg-red-100 text-red-700 border-red-200',
};

const statusLabels = {
    active: 'Active',
    completed: 'Completed',
    on_hold: 'On Hold',
    cancelled: 'Cancelled',
};

export default function ProjectShow({ project }: ProjectShowProps) {
    const { auth } = usePage<SharedData>().props;

    const formatCurrency = (amount: string) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(parseFloat(amount));
    };

    const formatDate = (date: string) => {
        if (!date) return '-';
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <AdminLayout user={auth.user}>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
                        <p className="text-muted-foreground">Project details and information</p>
                    </div>
                    <div className="flex gap-2">
                        <Link href={route('admin.projects.edit', project.id)}>
                            <Button>
                                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                                Edit Project
                            </Button>
                        </Link>
                        <Link href={route('admin.projects.index')}>
                            <Button variant="outline">
                                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Projects
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Project Info */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Status</div>
                                <Badge className={`mt-1 ${statusColors[project.status]}`}>{statusLabels[project.status]}</Badge>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Budget</div>
                                <div className="mt-1 text-lg font-semibold">{project.budget ? formatCurrency(project.budget) : '-'}</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                                <div className="mt-1 space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">Start:</span>
                                        <span className="font-medium">{formatDate(project.start_date)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">End:</span>
                                        <span className="font-medium">{formatDate(project.end_date)}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Created</div>
                                <div className="mt-1">{formatDate(project.created_at)}</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Last Updated</div>
                                <div className="mt-1">{formatDate(project.updated_at)}</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Client Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Name</div>
                                <div className="mt-1 font-medium">{project.client.name}</div>
                            </div>

                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Email</div>
                                <div className="mt-1">{project.client.email}</div>
                            </div>

                            {project.client.phone && (
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">Phone</div>
                                    <div className="mt-1">{project.client.phone}</div>
                                </div>
                            )}

                            {project.client.company && (
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">Company</div>
                                    <div className="mt-1">{project.client.company}</div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Description */}
                {project.description && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Description</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="whitespace-pre-wrap text-muted-foreground">{project.description}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminLayout>
    );
}
