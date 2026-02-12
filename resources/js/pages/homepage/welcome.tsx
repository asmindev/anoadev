import Belief from './components/belief';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Mission from './components/mission';
import Projects from './components/projects';

interface HomeProps {
    appName: string;
}

export default function Home({ appName }: HomeProps) {
    return (
        <main className="w-full bg-background text-foreground">
            <Header appName={appName} />
            <Hero />
            <Projects />
            <Mission />
            <Belief />
            <Contact />
            <Footer />
        </main>
    );
}
