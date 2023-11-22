import React from 'react'
import NavbarComp from '../components/NavbarComp'
import FeaturedGames from '../components/FeaturedGames';
import About from '../components/About';
import News from '../components/News';
import Footer from '../components/Footer';


import heroBG from '../assets/illidan-hero.png';
import footerVideo from '../assets/BlizzPromo.mp4';
import bnetApp from '../assets/battlenet_app.png';

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
                <div id="hero-text" className="flex flex-col justify-center items-center xl:gap-y-24 gap-y-4 z-30">
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
            {/* Liner-gradient over video, flex box with text and download for B.NET app */}
            <Footer />
        </main>
    )
}

export default Home