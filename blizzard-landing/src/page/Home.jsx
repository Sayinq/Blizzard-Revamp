import React from 'react'
import NavbarComp from '../components/NavbarComp'
import FeaturedGames from '../components/FeaturedGames';
import About from '../components/About';
import News from '../components/News';

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <NavbarComp />

            {/* Hero Section */}
            {/* Maybe make this like Buddha threeJS parallax with one of my assets */}
            <section className="w-screen h-screen">
                <h2 className="text-4xl font-bold">Test Text</h2>
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