import React from 'react'
import { Button } from '@nextui-org/react';

import arrowIcon from '../assets/arrow-down-right.svg';
import '../index.css';

const News = () => {
    return (
        <section id="news" 
            className="relative w-screen h-auto py-24">
                <div id="red-art" className="xl:flex hidden absolute w-[123px] h-[123px] left-[100px] top-[350px] blur-[90px] bg-[#7eb9ec] z-10 pointer-events-none" />
                <div id="blue-art" className="xl:flex hidden absolute w-[123px] h-[123px] right-[100px] bottom-[200px] blur-[90px] bg-[#148CEE] z-10 pointer-events-none" />

                <div id="news-header" className="flex flex-col w-full h-auto py-4 gap-y-8">
                    <p className="xl:text-base text-xs text-zinc-400 ml-4">(News)</p>
                    <div id="news-bold" className="flex flex-col w-full h-auto items-center">
                        <h1 className="xl:text-8xl text-5xl font-bold">Latest</h1>
                        <h1 className="xl:text-8xl text-5xl font-bold ml-32">News</h1>
                    </div>
                </div>
                <div id="news-articles" className="flex flex-wrap justify-center w-full p-4 xl:gap-x-8 gap-y-4 xl:pt-36 z-40">

                    <a href="https://www.blizzard.com/en-us/" className="relative xl:w-1/3 w-full xl:h-[800px] h-[400px] rounded-lg block">
                        <div
                            id="news-main"
                            className="relative xl:w-full h-full rounded-lg overflow-hidden sm:grayscale hover:grayscale-0 transition-all duration-100 ease-in-out"
                        >
                            <div
                                id="main-text"
                                className="flex absolute bottom-5 left-5 flex-col text-xl gap-y-2"
                            >
                                <p className="text-xs text-zinc-400 uppercase">Battle.net</p>
                                <h2 className="text-xl text-white uppercase font-bold">
                                    News and notable events in 2023.
                                </h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                    </a>

                    <div id="news-secondary" className="flex flex-col xl:w-1/4 w-full h-auto gap-y-4">
                        <a href="https://www.blizzard.com/en-us/">
                        <div id="secondary-one" className="relative w-full h-[390px] rounded-lg sm:grayscale hover:grayscale-0 transition-all duration-100 ease-in-out">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">BlizzCon</p>
                                <h2 className="text-xl text-white uppercase font-bold">BlizzCon '23 Tickets on Sale!</h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.blizzard.com/en-us/">
                        <div id="secondary-two" className="relative w-full h-[390px] rounded-lg sm:grayscale hover:grayscale-0 transition-all duration-100 ease-in-out">
                            <div className="flex flex-col absolute bottom-5 left-5 text-xl gap-y-2">
                                <p className="text-xs text-zinc-400 uppercase">Diablo IV</p>
                                <h2 className="text-xl text-white uppercase font-bold">Mother's blessing returns to sanctuary</h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div id="news-blogs" className="flex flex-col xl:w-1/4 w-full h-auto gap-y-12">
                        <a href="https://www.blizzard.com/en-us/">
                        <div className="relative flex flex-col justify-center w-full h-[150px] border-b-2 border-zinc-500 hover:bg-[#148CEE] rounded-t-md transition-background duration-100 ease-in-out">
                            <div className="flex flex-col text-xl gap-y-2 pl-2">
                                <p className="text-xs text-zinc-400 uppercase">Battle.net</p>
                                <h2 className="text-xl text-white font-bold">The Battle.net Black Friday Sale is Live!</h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.blizzard.com/en-us/">
                        <div className="relative flex flex-col justify-center w-full h-[150px] border-b-2 border-zinc-500 hover:bg-[#148CEE] rounded-t-md transition-background duration-100 ease-in-out">
                            <div className="flex flex-col text-xl gap-y-2 pl-2">
                                <p className="text-xs text-zinc-400 uppercase">Diablo Immortal</p>
                                <h2 className="text-xl text-white font-bold">Unleash savagery in Season 20!</h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.blizzard.com/en-us/">
                        <div className="relative flex flex-col justify-center w-full h-[150px] border-b-2 border-zinc-500 hover:bg-[#148CEE] rounded-t-md transition-background duration-100 ease-in-out">
                            <div className="flex flex-col text-xl gap-y-2 pl-2">
                                <p className="text-xs text-zinc-400 uppercase">World of Warcraft</p>
                                <h2 className="text-xl text-white font-bold">In Development: Seeds of Renewal</h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                        </a>
                        <a href="https://www.blizzard.com/en-us/">
                        <div className="relative flex flex-col justify-center w-full h-[150px] border-b-2 border-zinc-500 hover:bg-[#148CEE] rounded-t-md transition-background duration-100 ease-in-out">
                            <div className="flex flex-col text-xl gap-y-2 pl-2">
                                <p className="text-xs text-zinc-400 uppercase">Call of Duty: MWIII</p>
                                <h2 className="text-xl text-white font-bold">RICOCHET: Anti-Cheat Progress Report - New Features </h2>
                                <p className="flex flex-row text-xs text-zinc-400 uppercase">More </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div id="more-news" className="flex justify-center items-center w-full h-[100px]">
                        <a href="https://news.blizzard.com/en-us" className="flex justify-center items-center w-full h-auto">
                            <Button radius="lg" variant="ghost" className="flex flex-row justify-center items-center xl:w-[85%] w-full h-auto py-2 px-4 uppercase text-white">
                                <span>More News</span>
                                <img src={arrowIcon} className="w-6 h-6 rotate-[-45deg]" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default News