import React, {useState, useEffect} from 'react'
import gsap from 'gsap'
import Marquee from 'react-fast-marquee';
import '../index.css'

function PageLoader() {
    const [animationComplete, setAnimationComplete] = useState(false);
  
    useEffect(() => {
      const marqueeAnimation = gsap.to('#marquee-wrapper', {
        duration: 6.5,
        opacity: 1,
        ease: 'none',
      });
  
      marqueeAnimation.eventCallback('onComplete', () => {
        gsap.to('#marquee-wrapper', {
          opacity: 0,
          duration: 0.25,
        });
  
        gsap.to('.bar', {
          height: 0,
          stagger: {
            amount: 0.5,
          },
          ease: 'power4.inOut',
          duration: 1.5,
          onComplete: () => {
            setAnimationComplete(true);
          },
        });

        gsap.to('.bar2', {
            height: 0,
            ease: 'power4.inOut',
            duration: 1.75,
            onComplete: () => {
                setAnimationComplete(true);
            },
        });

        gsap.to('.bar3', {
            height: 0,
            ease: 'power4.inOut',
            duration: 1.95,
            onComplete: () => {
                setAnimationComplete(true);
            },
        });

      });
    }, []);
  
    return (
      <div id="overlay-wrapper" className={animationComplete ? 'hidden' : 'overflow-hidden'}>
        <div id="marquee-wrapper" className="flex flex-col fixed w-full h-full justify-center items-center text-[#BCBCC4] text-[2.5vh] overflow-hidden uppercase font-bold">
          <Marquee direction="left" autoFill="true" speed={60}>
            <p className="mr-[1rem]">Creativity</p>
            <p className="mx-[1rem] text-[#148CEE]">Community</p>
            <p className="mx-[1rem]">Innovation</p>
            <p className="mx-[1rem] text-[#148CEE]">Global</p>
          </Marquee>
          <Marquee direction="right" autoFill="true">
            <p className="mr-[1rem] text-[#148CEE]">Game Development</p>
            <p className="mx-[1rem]">Story Telling</p>
            <p className="mx-[1rem] text-[#148CEE]">Animation</p>
            <p className="mx-[1rem]">Design</p>
            <p className="mx-[1rem]">Programming</p>
          </Marquee>
          <Marquee direction="left" autoFill="true">
            <p className="mr-[1rem] text-[#148CEE]">MMO</p>
            <p className="mx-[1rem]">RTS</p>
            <p className="mx-[1rem]">RPG</p>
            <p className="mx-[1rem]">MOBA</p>
            <p className="mx-[1rem] text-[#148CEE]">Strategy</p>
            <p className="mx-[1rem]">Esports</p>
          </Marquee>
        </div>
        <div className="overlay flex flex-col fixed w-screen h-screen">
          {Array.from({ length: 1 }).map((_, index) => (
            <div key={index} className="bar relative origin-top w-[100vw] h-[100vh] bg-[#1A1A1A] z-50"></div>
          ))}
          <div className="bar2 absolute origin-top w-[100vw] h-[100vh] bg-white z-40"></div>
          <div className="bar3 absolute origin-top w-[100vw] h-[100vh] bg-[#148CEE] z-30"></div>
        </div>
      </div>
    );
  }
  
  export default PageLoader;