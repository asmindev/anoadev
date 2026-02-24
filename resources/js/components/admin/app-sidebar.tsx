import { NavMain } from '@/components/admin/nav-main';
import { NavUser } from '@/components/admin/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ComponentPropsWithoutRef } from 'react';

interface AppSidebarProps extends ComponentPropsWithoutRef<typeof Sidebar> {
    user?: {
        name: string;
        email: string;
        avatar?: string;
    };
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
    const navItems = [
        {
            title: 'Dashboard',
            url: route('admin.dashboard'),
            icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            ),
            isActive: route().current('admin.dashboard'),
        },
        {
            title: 'Projects',
            url: route('admin.projects.index'),
            icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                </svg>
            ),
            isActive: route().current('admin.projects.*'),
            items: [
                {
                    title: 'All Projects',
                    url: route('admin.projects.index'),
                    isActive: route().current('admin.projects.index'),
                },
                {
                    title: 'Add New',
                    url: route('admin.projects.create'),
                    isActive: route().current('admin.projects.create'),
                },
            ],
        },
        {
            title: 'Services',
            url: '/admin/services',
            icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            isActive: window.location.pathname.startsWith('/admin/services'),
            items: [
                {
                    title: 'All Services',
                    url: '/admin/services',
                    isActive: window.location.pathname === '/admin/services',
                },
                {
                    title: 'Add New',
                    url: '/admin/services/create',
                    isActive: window.location.pathname === '/admin/services/create',
                },
            ],
        },
        {
            title: 'Clients',
            url: '/admin/clients',
            icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            isActive: window.location.pathname.startsWith('/admin/clients'),
        },
        {
            title: 'Analytics',
            url: route('admin.analytics'),
            icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
            isActive: route().current('admin.analytics'),
        },
        {
            title: 'Settings',
            url: route('admin.settings.index'),
            icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            isActive: route().current('admin.settings.*'),
            items: [
                {
                    title: 'Company Profile',
                    url: route('admin.settings.index'),
                    isActive: route().current('admin.settings.index'),
                },
            ],
        },
    ];

    const { company } = usePage<SharedData>().props;
    const initials = company.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <Link href="/admin" className="flex items-center gap-2 px-2 py-3">
                    {company.logo ? (
                        <img src={`/storage/${company.logo}`} alt={company.name} className="h-8 w-8 rounded-lg border object-contain px-0.5" />
                    ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600">
                            <span className="font-mono text-sm font-bold text-white">{initials}</span>
                        </div>
                    )}
                    <div className="flex flex-col group-has-data-[collapsible=icon]/sidebar-wrapper:hidden">
                        <span className="font-mono text-sm font-semibold">{company.name}</span>
                        <span className="text-xs text-muted-foreground">Admin Panel</span>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser
                    user={
                        user || {
                            name: 'Admin User',
                            email: 'admin@anoadev.com',
                        }
                    }
                />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
