import React from 'react'
import NavbarComp from '../components/NavbarComp'
import FeaturedGames from '../components/FeaturedGames';
import About from '../components/About';
import News from '../components/News';
import FooterHero from '../components/FooterHero';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';

import '../index.css';

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <NavbarComp />

            {/* Hero Section */}
            <HomeSection />

            {/* Featured Section */}
            <FeaturedGames />

            {/* About Section */}
            <About />

            {/* News Section */}
            <News />

            {/* Footer Hero Section */}
            <FooterHero />

            {/* Actual Footer */}
            <Footer />
        </main>
    )
}

export default Home