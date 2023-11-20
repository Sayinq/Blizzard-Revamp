import React from 'react'

import arrowIcon from '../assets/arrow-down-right.svg';
import '../index.css';

const FeaturedGames = () => {
    const games = [
        {
            id: "01",
            name: "Diablo 4",
            link: "https://diablo4.blizzard.com/en-us/"
        },
        {
            id: "02",
            name: "Overwatch 2",
            link: "https://overwatch.blizzard.com/en-us/"
        },
        {
            id: "03",
            name: "World of Warcraft",
            link: "https://worldofwarcraft.blizzard.com/en-us/",
        },
        {
            id: "04",
            name: "Diablo Immortal",
            link: "https://diabloimmortal.blizzard.com/en-us/",
        },
        {
            id: "05",
            name: "Hearthstone",
            link: "https://hearthstone.blizzard.com/en-us/",
        },
    ];

    return (
        <section className="w-screen h-auto bg-[#282828] pb-24">
          <div id="featured-header" className="flex flex-col w-full h-auto py-4 gap-y-8">
            <p className="text-xs text-zinc-400 ml-4">(Games)</p>
            <div id="featured-bold" className="flex flex-col w-full h-auto items-center">
              <h1 className="text-5xl text-green-500 font-bold">Featured</h1>
              <h1 className="text-5xl text-green-500 font-bold ml-32">Games</h1>
            </div>
          </div>
          <div id="featured-games" className="w-full h-auto px-4">
            {games.map((game) => (
                <a key={game.link} href={game.link}>
                    <div key={game.id} className="flex flex-row w-full justify-between items-center h-[75px] border-t-2 border-zinc-600">
                        <p className="italic text-zinc-400 text-sm">({game.id})</p>
                        <h2 id="game-name" className="text-xl text-white w-[200px]">{game.name}</h2>
                        <div id="game-icon" className="">
                        <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
                        </div>
                    </div>
                </a>
            ))}
          </div>
        </section>
      );
    };

export default FeaturedGames