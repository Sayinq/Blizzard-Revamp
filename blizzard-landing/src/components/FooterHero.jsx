import React from 'react'
import { Button } from '@nextui-org/react'

import bnetApp from '../assets/battlenet_app.png';
import bnetLogo from '../assets/bnet-logo.svg';
import footerVideo from '../assets/BlizzPromo.mp4';
import footerStatic from '../assets/blizzFooterBG.png';

import '../index.css';

const FooterHero = () => {
    return (
        <section id="footer-hero" className="relative flex justify-center items-center w-screen h-screen xl:bg-transparent">

                <div id="video-content" className="absolute flex xl:flex-row flex-col w-full h-full xl:justify-evenly justify-center items-center z-40 xl:gap-x-12 gap-y-4">
                    <div id="content-text" className="relative flex flex-col justify-center items-center text-center gap-y-8">
                        <h1 className="2xl:text-7xl xl:text-5xl text-4xl font-bold">BATTLE.NET</h1>
                        <p className="2xl:text-xl xl:text-lg w-[300px] h-auto">Your one stop shop into the world of Blizzard and Activision</p>
                        <Button href="#" variant="flat" className="xl:flex hidden flex-row w-[250px] h-[50px] bg-[#148CEE] text-white rounded-[2px] gap-x-4 justify-center items-center">
                                <img src={bnetLogo} className="translate-y-[3px] w-6 h-6" />
                                <span>Download B.NET</span>
                        </Button>
                    </div>
                    <div id="content-image" className="flex flex-col justify-center items-center w-fit h-fit xl:gap-y-8">
                        
                        <img src={bnetApp} className="2xl:scale-[145%] xl:scale-[125%]"/>  
                    
                        <div id="content-button" className="relative w-fit h-fit">
                            <Button href="#" variant="flat" className="xl:hidden flex flex-row w-[250px] h-[50px] bg-[#148CEE] text-white rounded-[2px] gap-x-4 justify-center items-center">
                                <img src={bnetLogo} className="translate-y-[3px] w-6 h-6" />
                                <span>Download B.NET</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div id="video-overlay" className="absolute top-0 left-0 w-full h-full z-20"></div>
                <div id="video-bg" className="absolute xl:flex hidden inset-0 top-0 left-0 bottom-0 right-0">
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload="auto"
                    className="sm:object-cover sm:w-full sm:h-screen w-fit h-fit"
                    >
                    <source src={footerVideo} type="video/mp4" />
                    </video>
                </div>
        </section>
    )
}

export default FooterHero