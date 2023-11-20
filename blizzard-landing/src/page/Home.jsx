import React from 'react'
import NavbarComp from '../components/NavbarComp'
import FeaturedGames from '../components/FeaturedGames';
import About from '../components/About';

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <NavbarComp />

            {/* Hero Section */}
            <section className="w-screen h-auto bg-[#282828]">
                <h2 className="text-4xl font-bold">Test Text</h2>
            </section>

            {/* Featured Section */}
            <FeaturedGames />

            {/* About Section */}
            <About />

            {/* News Section */}
            <section id="news" className="w-screen h-auto py-24">
                <div id="news-header" className="flex flex-col w-full h-auto py-4 gap-y-8">
                    <p className="text-xs text-zinc-400 ml-4">(News)</p>
                    <div id="news-bold" className="flex flex-col w-full h-auto items-center">
                        <h1 className="text-5xl font-bold">Latest</h1>
                        <h1 className="text-5xl font-bold ml-32">News</h1>
                    </div>
                </div>
                <div id="news-articles" className="flex flex-wrap w-full px-4 gap-y-4">
                    <div id="news-main" className="relative w-full h-[400px] bg-zinc-500 rounded-lg">
                        <div id="main-text" className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                            <p className="text-xs text-zinc-400 uppercase">Battle.net</p>
                            <h2 className="text-xl text-white uppercase">News and notable events in 2023.</h2>
                            <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                        </div>
                    </div>
                    <div id="news-secondary" className="flex flex-col w-full h-auto gap-y-4">
                        <div className="relative w-full h-[400px] bg-indigo-500 rounded-lg">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">BlizzCon</p>
                                <h2 className="text-xl text-white uppercase">BlizzCon '23 Tickets on Sale!</h2>
                                <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                            </div>
                        </div>
                        <div className="relative w-full h-[400px] bg-green-500 rounded-lg">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">Diablo IV</p>
                                <h2 className="text-xl text-white uppercase">Mother's blessing returns to sanctuary</h2>
                                <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                            </div>
                        </div>
                    </div>

                    <div id="news-blogs" className="flex flex-col w-full h-auto">

                        <div className="relative flex flex-col w-full h-[200px] border-b-2 border-zinc-500">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">Battle.net</p>
                                <h2 className="text-xl text-white uppercase">The Battle.net Black Friday Sale is Live!</h2>
                                <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                            </div>
                        </div>

                        <div className="relative flex flex-col w-full h-[200px] border-b-2 border-zinc-500">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">Diablo Immortal</p>
                                <h2 className="text-xl text-white uppercase">Unleash savagery in Season 20!</h2>
                                <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                            </div>
                        </div>

                        <div className="relative flex flex-col w-full h-[200px] border-b-2 border-zinc-500">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">World of Warcraft</p>
                                <h2 className="text-xl text-white uppercase">In Development: Seeds of Renewal</h2>
                                <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                            </div>
                        </div>

                        <div className="relative flex flex-col w-full h-[200px] border-b-2 border-zinc-500">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">Call of Duty: MWIII</p>
                                <h2 className="text-xl text-white uppercase">RICOCHET: Anti-Cheat Progress Report - New Features </h2>
                                <a href=""><p className="flex flex-row text-xs text-zinc-400 uppercase">More </p></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer Hero Section */}
            <section className="w-screen h-screen bg-indigo-600">
            <h2 className="text-4xl font-bold">Footer Hero</h2>
            </section>
        </main>
    )
}

export default Home