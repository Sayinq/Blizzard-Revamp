import React from 'react'

import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnimation, invheadContentAnimation } from '../config/motion.js'
import heroBG from '../assets/illidan-hero.png';
import arrowLogo from '../assets/arrow-down.svg';

const HomeSection = () => {
    return (
        <AnimatePresence>
            <motion.section className="w-screen h-screen flex flex-col items-center justify-center">
                <div id="gradient-overlay" className="absolute top-0 left-0 w-full h-full z-20"></div>
                <motion.img
                    src={heroBG}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                    alt="Hero Background"
                    {...fadeAnimation}
                />
                <motion.div id="hero-text" className="flex flex-col justify-center items-center xl:gap-y-8 gap-y-4 z-30" {...invheadContentAnimation}>
                    <span className="xl:text-7xl md:text-5xl text-3xl font-bold">CTRL+ALT+DEFEAT</span>
                    <span className="xl:text-3xl md:text-xl text-base font-semibold">Your Adventure Starts Now</span>
                </motion.div>
                <motion.div id="hero-scroll" className="flex flex-col justify-center items-center gap-y-4 px-4 rounded-t-3xl rounded-b-3xl outline outline-2 outline-[#148CEE] w-fit h-[75px] translate-y-[15rem] text-white z-30 opacity-20" {...fadeAnimation}>
                    <img id="hero-arrow" src={arrowLogo} className="w-6 h-6 animate-bounce"/>
                </motion.div>
            </motion.section>
        </AnimatePresence>
    )
}

export default HomeSection