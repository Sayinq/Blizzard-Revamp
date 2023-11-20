import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import ScrollText from './ScrollText';

import bnetLogo from '../assets/bnet-logo.svg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {

    const split = new SplitType(".wrapper h2", {
    type: "chars",
    });

    const tl  = gsap.timeline({
    scrollTrigger: {
        trigger: "#textSection",
        start: "top top+=10%",
        end: "+=10%",
        scrub: 0.75,
    }
    })
    .set(split.chars, {
        color: "#0E76D0",
        stagger: 0.75,
    }, 0.1);

    }, []);

    return (
        <section id="textSection" className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex w-[900px] h-full justify-center items-center">
                <div className="wrapper w-full h-auto 2xl:text-[3.5rem] xl:text-5xl text-2xl text-[#D2D2D2] text-center" ref={textRef}>
                <h2 id="line" className="">Blizzard - Leading</h2>
                <h2 id="line" className="">Developer and</h2>
                <h2 id="line" className="">Publisher of</h2>
                <h2 id="line" className="">Famous AAA Titles.</h2>
                <h2 id="line" className="">The Company was</h2>
                <h2 id="line" className="">founded in 1994</h2>
                <h2 id="line" className="">and quickly became</h2>
                <h2 id="line" className="">one of the most</h2>
                <h2 id="line" className="">successful and</h2>
                <h2 id="line" className="">respected in</h2>
                <h2 id="line" className="">the world.</h2>
                </div>
            </div>
            <div id="scrolling-text" className="relative bottom-0 left-0 w-full h-auto">
                <ScrollText baseVelocity={-5} className="flex flex-row"> BLIZZARD BLIZZARD BLIZZARD BLIZZARD </ScrollText>
                <ScrollText baseVelocity={5}> BATTLE.NET BATTLE.NET BATTLE.NET </ScrollText>
            </div>
        </section>
    );
};

export default About;