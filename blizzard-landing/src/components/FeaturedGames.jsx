import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import arrowIcon from '../assets/arrow-down-right.svg';
import bgDiablo from '../assets/news/D4_pic.png';
import bgWOW from '../assets/news/wow_pic.png';
import bgImmortal from '../assets/news/immortal_pic.png';
import bgOverWatch from '../assets/news/overwatch_2.jpg';
import bgHS from '../assets/news/hearthstone_pic.jpg';
import '../index.css';

const FeaturedGames = () => {
  const games = [
    {
      id: '01',
      name: 'Diablo 4',
      link: 'https://diablo4.blizzard.com/en-us/',
      bg: bgDiablo,
    },
    {
      id: '02',
      name: 'Overwatch 2',
      link: 'https://overwatch.blizzard.com/en-us/',
      bg: bgOverWatch,
    },
    {
      id: '03',
      name: 'World of Warcraft',
      link: 'https://worldofwarcraft.blizzard.com/en-us/',
      bg: bgWOW,
    },
    {
      id: '04',
      name: 'Diablo Immortal',
      link: 'https://diabloimmortal.blizzard.com/en-us/',
      bg: bgImmortal,
    },
    {
      id: '05',
      name: 'Hearthstone',
      link: 'https://hearthstone.blizzard.com/en-us/',
      bg: bgHS,
    },
  ];

  const [hoveredGame, setHoveredGame] = useState(null);
  const gameWrappers = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredGame(index);
  };

  const handleMouseLeave = () => {
    setHoveredGame(null);
  };

  useEffect(() => {
    gameWrappers.current.forEach((wrapper, index) => {
      gsap.to(wrapper, {
        height: hoveredGame === index ? 275 : 75,
        duration: 0.3,
        ease: 'power2.inOut',
      });

      gsap.to(wrapper, {
        opacity: hoveredGame === index ? 1 : 0.7,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    });
  }, [hoveredGame]);

  return (
    <section className="w-screen h-auto pb-24">
        <div id="featured-header" className="flex flex-col w-full h-auto py-4 gap-y-8">
            <p className="xl:text-base text-xs text-zinc-400 ml-4">(Games)</p>
            <div id="featured-bold" className="flex flex-col w-full h-auto items-center">
              <h1 className="xl:text-8xl text-5xl text-green-500 font-bold">Featured</h1>
              <h1 className="xl:text-8xl text-5xl text-green-500 font-bold ml-32">Games</h1>
            </div>
          </div>
      <div id="featured-games" className="w-full h-auto xl:px-8 px-4 pt-4">
        {games.map((game, index) => (
          <a
            id="game"
            key={game.link}
            href={game.link}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={(el) => (gameWrappers.current[index] = el)}
              id={`game-wrapper-${index}`}
              key={game.id}
              className={`flex flex-row w-full justify-between items-start pt-4 xl:h-[100px] h-[75px] border-t-2 border-zinc-600`}
              style={{
                backgroundImage: `linear-gradient(rgba(17, 17, 17, ${
                  hoveredGame === index ? '0.6' : '0'
                }), rgba(17, 17, 17, ${hoveredGame === index ? '0.6' : '0'})), ${
                  hoveredGame === index ? `url(${game.bg})` : 'none'
                }`,
                backgroundSize: 'cover',
                backgroundPosition: '25% 25%',
              }}
            >
              <p className="italic text-zinc-400 text-sm">({game.id})</p>
              <h2
                id="game-name"
                className="2xl:text-4xl xl:text-2xl text-xl text-white text-left xl:w-[600px] w-[200px] xl:mr-[30%]"
              >
                {game.name}
              </h2>
              <div id="game-icon" className="">
                <img id="arrow-icon" src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;

