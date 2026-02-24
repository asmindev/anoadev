import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { route as ziggyRoute } from 'ziggy-js';
import { ThemeProvider } from './contexts/theme-context';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Make route globally available
declare global {
    interface Window {
        route: typeof ziggyRoute;
    }
    var route: typeof ziggyRoute;
}

window.route = ziggyRoute;
globalThis.route = ziggyRoute;

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName) + ' | Digital Business Partner',
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
