import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { SharedData } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { ImagePlus, X } from 'lucide-react';
import { useState } from 'react';

interface CompanyProfile {
    id: number;
    name: string;
    tagline: string | null;
    description: string | null;
    logo: string | null;
    email: string | null;
    phone: string | null;
    whatsapp: string | null;
    address: string | null;
    city: string | null;
    province: string | null;
    website: string | null;
    instagram: string | null;
    github: string | null;
    linkedin: string | null;
    facebook: string | null;
    twitter: string | null;
}

interface SettingsProps {
    profile: CompanyProfile;
}

export default function Settings({ profile }: SettingsProps) {
    const { auth } = usePage<SharedData>().props;
    const [logoPreview, setLogoPreview] = useState<string | null>(profile.logo ? `/storage/${profile.logo}` : null);

    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        _method: 'put',
        name: profile.name || '',
        tagline: profile.tagline || '',
        description: profile.description || '',
        logo: null as File | null,
        email: profile.email || '',
        phone: profile.phone || '',
        whatsapp: profile.whatsapp || '',
        address: profile.address || '',
        city: profile.city || '',
        province: profile.province || '',
        website: profile.website || '',
        instagram: profile.instagram || '',
        github: profile.github || '',
        linkedin: profile.linkedin || '',
        facebook: profile.facebook || '',
        twitter: profile.twitter || '',
    });

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('logo', file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const removeLogo = () => {
        setData('logo', null);
        setLogoPreview(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Settings - Company Profile" />

            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-muted-foreground">Manage your company profile and information.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Identity */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Identity</CardTitle>
                            <CardDescription>Your company name, tagline, and logo.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Logo Upload */}
                            <div className="space-y-4">
                                <Label className="text-base font-semibold">Company Logo</Label>
                                <div className="flex items-start gap-6">
                                    {logoPreview ? (
                                        <div className="relative">
                                            <div className="h-24 w-24 overflow-hidden rounded-lg border shadow-sm">
                                                <img src={logoPreview} alt="Logo" className="h-full w-full object-cover" />
                                            </div>
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="icon"
                                                className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                                                onClick={removeLogo}
                                            >
                                                <X className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
                                            <ImagePlus className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                    )}
                                    <div className="space-y-2">
                                        <Input
                                            id="logo"
                                            type="file"
                                            accept="image/*"
                                            className="max-w-xs cursor-pointer"
                                            onChange={handleLogoChange}
                                        />
                                        <p className="text-sm text-muted-foreground">SVG, PNG, JPG, GIF or WEBP (max. 2MB)</p>
                                        {errors.logo && <p className="text-sm text-red-500">{errors.logo}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Company Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="name">
                                        Company Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="AnoadDev" />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>

                                {/* Tagline */}
                                <div className="space-y-2">
                                    <Label htmlFor="tagline">Tagline</Label>
                                    <Input
                                        id="tagline"
                                        value={data.tagline}
                                        onChange={(e) => setData('tagline', e.target.value)}
                                        placeholder="Your Digital Partner in Kendari"
                                    />
                                    {errors.tagline && <p className="text-sm text-red-500">{errors.tagline}</p>}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Tell about your company..."
                                    rows={4}
                                    className="resize-none"
                                />
                                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>How clients can reach your company.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="hello@anoadev.com"
                                    />
                                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder="+62 812 3456 7890"
                                    />
                                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                                </div>

                                {/* WhatsApp */}
                                <div className="space-y-2">
                                    <Label htmlFor="whatsapp">WhatsApp</Label>
                                    <Input
                                        id="whatsapp"
                                        value={data.whatsapp}
                                        onChange={(e) => setData('whatsapp', e.target.value)}
                                        placeholder="+62 812 3456 7890"
                                    />
                                    {errors.whatsapp && <p className="text-sm text-red-500">{errors.whatsapp}</p>}
                                </div>

                                {/* Website */}
                                <div className="space-y-2">
                                    <Label htmlFor="website">Website</Label>
                                    <Input
                                        id="website"
                                        type="url"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        placeholder="https://anoadev.com"
                                    />
                                    {errors.website && <p className="text-sm text-red-500">{errors.website}</p>}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Address */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Address</CardTitle>
                            <CardDescription>Your company's physical location.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* City */}
                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" value={data.city} onChange={(e) => setData('city', e.target.value)} placeholder="Kendari" />
                                    {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                                </div>

                                {/* Province */}
                                <div className="space-y-2">
                                    <Label htmlFor="province">Province</Label>
                                    <Input
                                        id="province"
                                        value={data.province}
                                        onChange={(e) => setData('province', e.target.value)}
                                        placeholder="Sulawesi Tenggara"
                                    />
                                    {errors.province && <p className="text-sm text-red-500">{errors.province}</p>}
                                </div>

                                {/* Full Address */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="address">Full Address</Label>
                                    <Textarea
                                        id="address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        placeholder="Jl. Example No. 123, Kendari..."
                                        rows={3}
                                        className="resize-none"
                                    />
                                    {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Social Media */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Social Media</CardTitle>
                            <CardDescription>Links to your company's social media profiles.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Instagram */}
                                <div className="space-y-2">
                                    <Label htmlFor="instagram">Instagram</Label>
                                    <Input
                                        id="instagram"
                                        type="url"
                                        value={data.instagram}
                                        onChange={(e) => setData('instagram', e.target.value)}
                                        placeholder="https://instagram.com/anoadev"
                                    />
                                    {errors.instagram && <p className="text-sm text-red-500">{errors.instagram}</p>}
                                </div>

                                {/* GitHub */}
                                <div className="space-y-2">
                                    <Label htmlFor="github">GitHub</Label>
                                    <Input
                                        id="github"
                                        type="url"
                                        value={data.github}
                                        onChange={(e) => setData('github', e.target.value)}
                                        placeholder="https://github.com/anoadev"
                                    />
                                    {errors.github && <p className="text-sm text-red-500">{errors.github}</p>}
                                </div>

                                {/* LinkedIn */}
                                <div className="space-y-2">
                                    <Label htmlFor="linkedin">LinkedIn</Label>
                                    <Input
                                        id="linkedin"
                                        type="url"
                                        value={data.linkedin}
                                        onChange={(e) => setData('linkedin', e.target.value)}
                                        placeholder="https://linkedin.com/company/anoadev"
                                    />
                                    {errors.linkedin && <p className="text-sm text-red-500">{errors.linkedin}</p>}
                                </div>

                                {/* Facebook */}
                                <div className="space-y-2">
                                    <Label htmlFor="facebook">Facebook</Label>
                                    <Input
                                        id="facebook"
                                        type="url"
                                        value={data.facebook}
                                        onChange={(e) => setData('facebook', e.target.value)}
                                        placeholder="https://facebook.com/anoadev"
                                    />
                                    {errors.facebook && <p className="text-sm text-red-500">{errors.facebook}</p>}
                                </div>

                                {/* Twitter / X */}
                                <div className="space-y-2">
                                    <Label htmlFor="twitter">Twitter / X</Label>
                                    <Input
                                        id="twitter"
                                        type="url"
                                        value={data.twitter}
                                        onChange={(e) => setData('twitter', e.target.value)}
                                        placeholder="https://x.com/anoadev"
                                    />
                                    {errors.twitter && <p className="text-sm text-red-500">{errors.twitter}</p>}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-4">
                        {recentlySuccessful && <p className="text-sm text-green-600 dark:text-green-400">Saved successfully.</p>}
                        <Button type="submit" disabled={processing} size="lg">
                            {processing ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
