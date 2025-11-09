import Belief from './components/belief';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Mission from './components/mission';
import Projects from './components/projects';

export default function Home() {
    return (
        <main className="w-full bg-background text-foreground">
            <Header />
            <Hero />
            <Projects />
            <Mission />
            <Belief />
            <Contact />
            <Footer />
        </main>
    );
}
