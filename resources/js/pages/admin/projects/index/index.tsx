import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AdminLayout from '@/layouts/admin-layout';
import { Link, router } from '@inertiajs/react';
import { ArrowUpRight, Calendar, Filter, Folder, MoreHorizontal, Plus, Search } from 'lucide-react';
import { useState } from 'react';

interface Client {
    id: number;
    name: string;
    email: string;
    avatar?: string;
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
}

interface ProjectsIndexProps {
    projects: {
        data: Project[];
        links: any[];
        current_page: number;
        last_page: number;
    };
    filters: {
        status?: string;
        search?: string;
    };
    user?: {
        name: string;
        email: string;
    };
}

const statusColors = {
    active: 'bg-green-100 text-green-700 border-green-200 hover:bg-green-100/80',
    completed: 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100/80',
    on_hold: 'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100/80',
    cancelled: 'bg-red-100 text-red-700 border-red-200 hover:bg-red-100/80',
};

const statusLabels = {
    active: 'Active',
    completed: 'Completed',
    on_hold: 'On Hold',
    cancelled: 'Cancelled',
};

export default function ProjectsIndex({ projects, filters, user }: ProjectsIndexProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState(filters.status || 'all');
    const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; project: Project | null }>({
        open: false,
        project: null,
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route('admin.projects.index'), { search, status: statusFilter }, { preserveState: true, replace: true });
    };

    const handleStatusFilter = (status: string) => {
        setStatusFilter(status);
        router.get(route('admin.projects.index'), { search, status }, { preserveState: true, replace: true });
    };

    const handleDelete = () => {
        if (!deleteDialog.project) return;

        router.delete(route('admin.projects.destroy', deleteDialog.project.id), {
            onSuccess: () => {
                setDeleteDialog({ open: false, project: null });
            },
        });
    };

    const formatCurrency = (amount: string) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(parseFloat(amount));
    };

    const formatDate = (date: string) => {
        if (!date) return '-';
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    return (
        <AdminLayout user={user}>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                        <p className="text-muted-foreground">Manage and track all client projects.</p>
                    </div>
                    <Link href={route('admin.projects.create')}>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            New Project
                        </Button>
                    </Link>
                </div>

                <Card className="overflow-hidden border-none shadow-md">
                    <div className="border-b bg-muted/40 p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <form onSubmit={handleSearch} className="relative flex-1 md:max-w-sm">
                                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search projects or clients..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="bg-background pl-9"
                                />
                            </form>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant={statusFilter === 'all' ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => handleStatusFilter('all')}
                                    className="h-8"
                                >
                                    All
                                </Button>
                                <Button
                                    variant={statusFilter === 'active' ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => handleStatusFilter('active')}
                                    className="h-8"
                                >
                                    Active
                                </Button>
                                <Button
                                    variant={statusFilter === 'completed' ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => handleStatusFilter('completed')}
                                    className="h-8"
                                >
                                    Completed
                                </Button>
                                <Button
                                    variant={statusFilter === 'on_hold' ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => handleStatusFilter('on_hold')}
                                    className="h-8"
                                >
                                    On Hold
                                </Button>
                            </div>
                        </div>
                    </div>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="w-[300px]">Project Details</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Budget</TableHead>
                                    <TableHead>Timeline</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                                <Folder className="h-8 w-8 text-muted-foreground/50" />
                                                <p>No projects found matching your criteria.</p>
                                                {search !== '' && (
                                                    <Button
                                                        variant="link"
                                                        onClick={() => {
                                                            setSearch('');
                                                            setStatusFilter('all');
                                                            router.get(route('admin.projects.index'));
                                                        }}
                                                    >
                                                        Clear filters
                                                    </Button>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    projects.data.map((project) => (
                                        <TableRow key={project.id} className="group hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-foreground transition-colors group-hover:text-primary">
                                                        {project.name}
                                                    </span>
                                                    {project.description && (
                                                        <span className="text-xs text-muted-foreground" title={project.description}>
                                                            {project.description.length > 50
                                                                ? `${project.description.substring(0, 50)}...`
                                                                : project.description}
                                                        </span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-8 w-8 border">
                                                        <AvatarImage src={project.client.avatar} alt={project.client.name} />
                                                        <AvatarFallback className="bg-primary/10 text-xs text-primary">
                                                            {getInitials(project.client.name)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium">{project.client.name}</span>
                                                        <span className="text-xs text-muted-foreground">{project.client.email}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className={statusColors[project.status]}>
                                                    {statusLabels[project.status]}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 font-medium">
                                                    {project.budget ? (
                                                        <>
                                                            <span className="text-xs text-muted-foreground">IDR</span>
                                                            {formatCurrency(project.budget).replace('Rp', '')}
                                                        </>
                                                    ) : (
                                                        <span className="text-muted-foreground">-</span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col gap-1 text-xs">
                                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        <span>{formatDate(project.start_date)}</span>
                                                    </div>
                                                    {project.end_date && (
                                                        <div className="ml-5 text-muted-foreground/70">to {formatDate(project.end_date)}</div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">Open menu</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem onClick={() => router.visit(route('admin.projects.show', project.id))}>
                                                            <ArrowUpRight className="mr-2 h-4 w-4" />
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => router.visit(route('admin.projects.edit', project.id))}>
                                                            <Filter className="mr-2 h-4 w-4" />
                                                            Edit Project
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem
                                                            onClick={() => setDeleteDialog({ open: true, project })}
                                                            className="text-destructive focus:text-destructive"
                                                        >
                                                            Delete Project
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                    {projects.last_page > 1 && (
                        <div className="flex items-center justify-center border-t bg-muted/40 p-4">
                            <div className="flex gap-1">
                                {projects.links.map((link, index) => (
                                    <Button
                                        key={index}
                                        variant={link.active ? 'secondary' : 'ghost'}
                                        size="sm"
                                        className={`h-8 w-8 p-0 ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                        disabled={!link.url}
                                        onClick={() => link.url && router.visit(link.url)}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </Card>
            </div>

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, project: null })}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Project</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete <span className="font-medium text-foreground">"{deleteDialog.project?.name}"</span>?
                            <br />
                            This action cannot be undone and will remove all associated data.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteDialog({ open: false, project: null })}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                            Delete Project
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    );
}
