import React from 'react'
import NavbarComp from '../components/NavbarComp'
import FeaturedGames from '../components/FeaturedGames';
import About from '../components/About';
import News from '../components/News';
import heroBG from '../assets/illidan-hero.png';
import '../index.css';

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <NavbarComp />

            {/* Hero Section */}
            {/* Maybe make this like Buddha threeJS parallax with one of my assets */}
            <section className="w-screen h-screen flex items-center justify-center">
                <div id="gradient-overlay" className="absolute top-0 left-0 w-full h-full z-20"></div>
                <img
                    src={heroBG}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                    alt="Hero Background"
                />
                <div id="hero-text" className="flex flex-col justify-center items-center gap-y-8 z-30">
                    <span className="xl:text-7xl md:text-5xl text-3xl font-bold">CTRL+ALT+DEFEAT</span>
                    <span className="xl:text-3xl md:text-xl text-base font-semibold">Your Adventure Starts Now</span>
                </div>
            </section>

            {/* Featured Section */}
            <FeaturedGames />

            {/* About Section */}
            <About />

            {/* News Section */}
            <News />

            {/* Footer Hero Section */}
            <section className="w-screen h-screen bg-indigo-600">
            <h2 className="text-4xl font-bold">Footer Hero</h2>
            </section>
        </main>
    )
}

export default Home