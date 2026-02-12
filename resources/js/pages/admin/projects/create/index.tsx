import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { Link, useForm } from '@inertiajs/react';
import { ImagePlus, X } from 'lucide-react';
import { useState } from 'react';

interface ProjectFormProps {
    project?: {
        id: number;
        client: {
            name: string;
            email: string;
        };
        name: string;
        link: string | null;
        description: string;
        image: string;
        status: string;
        budget: string;
        start_date: string;
        end_date: string;
    };
    auth: {
        user: {
            name: string;
            email: string;
        };
    };
}

export default function ProjectForm({ project, auth }: ProjectFormProps) {
    const isEditing = !!project;
    const [preview, setPreview] = useState<string | null>(project?.image ? `/storage/${project.image}` : null);

    const { data, setData, post, processing, errors } = useForm({
        client_name: project?.client?.name || '',
        client_email: project?.client?.email || '',
        name: project?.name || '',
        link: project?.link || '',
        description: project?.description || '',
        image: null as File | null,
        status: project?.status || 'active',
        budget: project?.budget || '',
        start_date: project?.start_date || '',
        end_date: project?.end_date || '',
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        setData('image', null);
        setPreview(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            post(
                route('admin.projects.update', {
                    project: project.id,
                    _method: 'put',
                }),
            );
        } else {
            post(route('admin.projects.store'));
        }
    };

    return (
        <AdminLayout user={auth.user}>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{isEditing ? 'Edit Project' : 'Create New Project'}</h1>
                        <p className="text-muted-foreground">{isEditing ? 'Update project details.' : 'Add a new project to your portfolio.'}</p>
                    </div>
                    <Link href={route('admin.projects.index')}>
                        <Button variant="outline">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Projects
                        </Button>
                    </Link>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Image Upload */}
                            <div className="space-y-4">
                                <Label htmlFor="image" className="text-lg font-semibold">
                                    Project Image
                                </Label>
                                <div className="flex flex-col gap-4">
                                    {preview ? (
                                        <div className="relative h-64 w-full overflow-hidden rounded-lg border shadow-sm md:h-80">
                                            <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="icon"
                                                className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-md transition-transform hover:scale-105"
                                                onClick={removeImage}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-12 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800">
                                            <div className="mb-4 rounded-full bg-primary/10 p-4">
                                                <ImagePlus className="h-8 w-8 text-primary" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Upload your project cover</p>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG, GIF or WEBP (max. 2MB)</p>
                                            </div>
                                            <Input
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                className="mt-6 max-w-xs cursor-pointer"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    )}
                                </div>
                                {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Project Name */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="name">
                                        Project Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="E-commerce Platform Redesign"
                                        className="text-lg"
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>

                                {/* Project Link */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="link">Project Link</Label>
                                    <Input
                                        id="link"
                                        type="url"
                                        value={data.link}
                                        onChange={(e) => setData('link', e.target.value)}
                                        placeholder="https://example.com"
                                    />
                                    {errors.link && <p className="text-sm text-red-500">{errors.link}</p>}
                                </div>

                                {/* Description */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Describe the project objectives, scope, and key deliverables..."
                                        rows={5}
                                        className="resize-none"
                                    />
                                    {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                                </div>

                                {/* Divider */}
                                <div className="md:col-span-2">
                                    <div className="my-2 border-t" />
                                    <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">Client Details</h3>
                                </div>

                                {/* Client Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="client_name">
                                        Client Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="client_name"
                                        value={data.client_name}
                                        onChange={(e) => setData('client_name', e.target.value)}
                                        placeholder="Acme Corp"
                                    />
                                    {errors.client_name && <p className="text-sm text-red-500">{errors.client_name}</p>}
                                </div>

                                {/* Client Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="client_email">
                                        Client Email <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="client_email"
                                        type="email"
                                        value={data.client_email}
                                        onChange={(e) => setData('client_email', e.target.value)}
                                        placeholder="contact@acme.com"
                                    />
                                    {errors.client_email && <p className="text-sm text-red-500">{errors.client_email}</p>}
                                </div>

                                {/* Divider */}
                                <div className="md:col-span-2">
                                    <div className="my-2 border-t" />
                                    <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">Project Specifics</h3>
                                </div>

                                {/* Status */}
                                <div className="space-y-2">
                                    <Label htmlFor="status">
                                        Status <span className="text-red-500">*</span>
                                    </Label>
                                    <Select value={data.status} onValueChange={(value) => setData('status', value)}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="on_hold">On Hold</SelectItem>
                                            <SelectItem value="cancelled">Cancelled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
                                </div>

                                {/* Budget */}
                                <div className="space-y-2">
                                    <Label htmlFor="budget">Budget (IDR)</Label>
                                    <Input
                                        id="budget"
                                        type="number"
                                        value={data.budget}
                                        onChange={(e) => setData('budget', e.target.value)}
                                        placeholder="10000000"
                                        min="0"
                                        step="1000"
                                    />
                                    {errors.budget && <p className="text-sm text-red-500">{errors.budget}</p>}
                                </div>

                                {/* Date Range */}
                                <div className="space-y-2">
                                    <Label htmlFor="start_date">Start Date</Label>
                                    <Input
                                        id="start_date"
                                        type="date"
                                        value={data.start_date}
                                        onChange={(e) => setData('start_date', e.target.value)}
                                    />
                                    {errors.start_date && <p className="text-sm text-red-500">{errors.start_date}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="end_date">End Date</Label>
                                    <Input id="end_date" type="date" value={data.end_date} onChange={(e) => setData('end_date', e.target.value)} />
                                    {errors.end_date && <p className="text-sm text-red-500">{errors.end_date}</p>}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-4 border-t pt-6">
                                <Link href={route('admin.projects.index')}>
                                    <Button type="button" variant="outline" size="lg">
                                        Cancel
                                    </Button>
                                </Link>
                                <Button type="submit" disabled={processing} size="lg">
                                    {processing ? 'Saving...' : isEditing ? 'Update Project' : 'Create Project'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AdminLayout>
    );
}
