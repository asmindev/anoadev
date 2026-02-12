import { AppSidebar } from '@/components/admin/app-sidebar';
import { AdminHeader } from '@/components/admin/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
    user?: {
        name: string;
        email: string;
        avatar?: string;
    };
}

export default function AdminLayout({ children, user }: AdminLayoutProps) {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar user={user} />
                <SidebarInset className="flex min-w-0 flex-col">
                    <AdminHeader />
                    <main className="flex-1 overflow-auto p-6">{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    );
}
