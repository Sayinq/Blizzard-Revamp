import React from 'react'
import { Button, 
        Link,
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem } from '@nextui-org/react';



import blizzLogo from '../assets/blizz-logo.svg';
import personLogo from '../assets/person-outline.svg';
import bnetLogo from '../assets/bnet-logo.svg';
import dotsLogo from '../assets/dots-menu.svg';
import chevronLogo from '../assets/chevron-down-outline.svg';


const NavbarComp = () => {
    return (
        <nav id="navbar" className="fixed top-0 left-0 flex items-center w-screen h-[100px] bg-[#1A1A1A] z-50">
            <div id="nav-wrapper" className="absolute flex flex-row justify-between items-center w-full h-auto px-8">
                <div id="" className="flex flex-row items-center gap-x-4">
                    <img src={blizzLogo} className="w-32 h-32"/>
                    <div id="links" className="lg:flex hidden flex-row 2xl:gap-x-4">

                        {/* Wrap these with their own modals */}
                        <Dropdown className="bg-[#1A1A1A]">
                            <DropdownTrigger>
                                <Button className="flex flex-row text-white text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
                                    Diablo
                                    <img src={chevronLogo} className="w-4 h-4" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Diablo Series">
                                <DropdownItem key="D4" href="https://diablo4.blizzard.com/en-us/">Diablo IV</DropdownItem>
                                <DropdownItem key="D3" href="https://us.diablo3.blizzard.com/en-us/">Diablo III</DropdownItem>
                                <DropdownItem key="D2R" href="https://diablo2.blizzard.com/en-us/">Diablo II: Resurrected</DropdownItem>
                                <DropdownItem key="DI" href="https://diabloimmortal.blizzard.com/en-us/">Diablo Immortal</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown className="bg-[#1A1A1A]">
                            <DropdownTrigger>
                                <Button className="flex flex-row text-white text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
                                    Overwatch
                                    <img src={chevronLogo} className="w-4 h-4" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Overwatch Series">
                                <DropdownItem key="OW" href="https://overwatch.blizzard.com/en-us/">Overwatch 2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown className="bg-[#1A1A1A]">
                            <DropdownTrigger>
                                <Button className="flex flex-row text-white text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
                                    Warcraft
                                    <img src={chevronLogo} className="w-4 h-4" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Warcraft Series">
                                <DropdownItem key="WOW" href="https://worldofwarcraft.blizzard.com/en-us/">World of Warcraft</DropdownItem>
                                <DropdownItem key="HS" href="https://hearthstone.blizzard.com/en-us">Hearthstone</DropdownItem>
                                <DropdownItem key="WCRIII" href="https://warcraft3.blizzard.com/en-us/">Warcraft III: Reforged</DropdownItem>
                                <DropdownItem key="WR" href="https://warcraftrumble.blizzard.com/en-us/">Warcraft Rumble</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown className="bg-[#1A1A1A]">
                            <DropdownTrigger>
                                <Button className="flex flex-row text-white text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
                                    Starcraft
                                    <img src={chevronLogo} className="w-4 h-4" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Starcraft Series">
                                <DropdownItem key="SC2" href="https://starcraft2.blizzard.com/en-us/">Starcraft</DropdownItem>
                                <DropdownItem key="SCR" href="https://starcraft.blizzard.com/en-us/">Starcraft: Remastered</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                    </div>
                    <div id="" className="lg:hidden flex w-fit h-fit p-2 rounded-lg bg-zinc-500/10 hover:bg-zinc-500/40">
                        <img src={dotsLogo} className="w-6 h-6" />
                    </div>
                </div>
                <div id="account-buttons" className="flex flex-row gap-x-8">

                    <Link href="" className="text-white text-lg font-bold">About</Link>

                    <Link href="https://us.shop.battle.net/en-us" className="text-white text-lg font-bold">Shop</Link>

                    <Link href="" className="flex justify-center items-center p-[0.75rem] h-fit w-fit rounded-full bg-[#148CEE]">
                        <img src={personLogo} className="w-6 h-6" />
                    </Link>

                    <Button href="#" variant="flat" className="xl:flex hidden flex-row w-[200px] h-[50px] bg-[#148CEE] text-white rounded-[2px] gap-x-4 justify-center items-center">
                        <img src={bnetLogo} className="translate-y-[3px] w-6 h-6" />
                        <span>Download B.NET</span>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComp