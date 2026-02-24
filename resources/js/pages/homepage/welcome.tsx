import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import Belief from './components/belief';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Mission from './components/mission';
import Projects from './components/projects';

export default function Home() {
    const { company } = usePage<SharedData>().props;

    return (
        <main className="w-full bg-background text-foreground">
            <Header appName={company.name} />
            <Hero company={company} />
            <Projects />
            <Mission />
            <Belief />
            <Contact company={company} />
            <Footer company={company} />
        </main>
    );
}
