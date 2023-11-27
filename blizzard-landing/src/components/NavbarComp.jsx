import React from 'react'
import { Button, 
        Link,
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem,
        DropdownSection,
        User } from '@nextui-org/react';



import blizzLogo from '../assets/blizz-logo.svg';
import personLogo from '../assets/person-outline.svg';
import bnetLogo from '../assets/bnet-logo.svg';
import dotsLogo from '../assets/dots-menu.svg';
import chevronLogo from '../assets/chevron-down-outline.svg';


const NavbarComp = () => {
    return (
        <nav id="navbar" className="fixed top-0 left-0 flex items-center w-screen h-[100px] bg-[#1A1A1A] z-50">
            <div id="nav-wrapper" className="absolute flex flex-row sm:justify-between justify-start items-center w-full h-auto px-8">
                <div id="" className="flex flex-row items-center sm:gap-x-4">
                    <img src={blizzLogo} className="w-32 h-32"/>
                    <div id="links" className="lg:flex hidden flex-row 2xl:gap-x-4">

                        {/* Wrap these with their own modals */}
                        <Dropdown className="bg-[#1A1A1A]">
                            <DropdownTrigger>
                                <Button className="flex flex-row text-white 2xl:text-xl text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
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
                                <Button className="flex flex-row text-white 2xl:text-xl text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
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
                                <Button className="flex flex-row text-white 2xl:text-xl text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
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
                                <Button className="flex flex-row text-white 2xl:text-xl text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
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
                    <Dropdown className="bg-[#1A1A1A]">
                        <DropdownTrigger>
                            <Button className="lg:hidden flex flex-row text-white text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
                                <img src={dotsLogo} className="w-6 h-6" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Games">
                            {/* Drop-down sections with each being it's own series */}
                            <DropdownSection key="Bnet Button">
                                <DropdownItem key="button" href="">
                                    <Button href="#" variant="flat" className="flex flex-row w-full h-auto py-2 bg-[#148CEE] text-white rounded-[2px] gap-x-4 justify-center items-center uppercase border-none outline-none">
                                        <img src={bnetLogo} className="w-6 h-6" />
                                        <span className="font-bold">Battle.NET</span>
                                    </Button>
                                </DropdownItem>
                            </DropdownSection>
                            <DropdownSection aria-label="Diablo Series" title="Diablo Series">
                                <DropdownItem key="D4" href="https://diablo4.blizzard.com/en-us/">Diablo IV</DropdownItem>
                                <DropdownItem key="D3" href="https://us.diablo3.blizzard.com/en-us/">Diablo III</DropdownItem>
                                <DropdownItem key="D2R" href="https://diablo2.blizzard.com/en-us/">Diablo II: Resurrected</DropdownItem>
                                <DropdownItem key="DI" href="https://diabloimmortal.blizzard.com/en-us/">Diablo Immortal</DropdownItem>
                            </DropdownSection>
                            <DropdownSection aria-label="Overwatch Series" showDivider={true} title="Overwatch Series">
                                <DropdownItem key="OW" href="https://overwatch.blizzard.com/en-us/">Overwatch 2</DropdownItem>
                            </DropdownSection>
                            <DropdownSection aria-label="Warcraft Series" showDivider title="Warcraft Series">
                                <DropdownItem key="WOW" href="https://worldofwarcraft.blizzard.com/en-us/">World of Warcraft</DropdownItem>
                                <DropdownItem key="HS" href="https://hearthstone.blizzard.com/en-us">Hearthstone</DropdownItem>
                                <DropdownItem key="WCRIII" href="https://warcraft3.blizzard.com/en-us/">Warcraft III: Reforged</DropdownItem>
                                <DropdownItem key="WR" href="https://warcraftrumble.blizzard.com/en-us/">Warcraft Rumble</DropdownItem>
                            </DropdownSection>
                            <DropdownSection aria-label="Starcraft Series" title="Starcraft Series">
                                <DropdownItem key="SC2" href="https://starcraft2.blizzard.com/en-us/">Starcraft</DropdownItem>
                                <DropdownItem key="SCR" href="https://starcraft.blizzard.com/en-us/">Starcraft: Remastered</DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div id="account-buttons" className="flex flex-row items-center lg:gap-x-8">

                    <Dropdown className="bg-[#1A1A1A]">
                        <DropdownTrigger>
                            <Button className="2xl:flex hidden flex-row text-white 2xl:text-xl text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-4">
                                About
                                <img src={chevronLogo} className="w-4 h-4" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            {/* About dropdown stuff */}
                            <DropdownSection aria-label="About Stuff">
                            <   DropdownItem key="Account Blizzard">About Blizzard</DropdownItem>
                                <DropdownItem key="News">News</DropdownItem>
                                <DropdownItem key="BlizzCon">BlizzCon</DropdownItem>
                                <DropdownItem key="Careers">Careers</DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>

                    <Link href="https://us.shop.battle.net/en-us" className="sm:flex hidden text-white 2xl:text-xl text-lg font-bold bg-transparent hover:bg-zinc-500/40 border-none outline-none m-0 p-2 rounded-lg">
                        Shop
                    </Link>

                    <Dropdown className="bg-[#1A1A1A]">
                        <DropdownTrigger>
                            <Button className="flex justify-center sm:translate-x-[0px] translate-x-[20px] items-center p-[0.75rem] h-fit w-fit rounded-full bg-[#148CEE]">
                                <img src={personLogo} className="w-6 h-6" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownSection key="Login Button">
                                <DropdownItem key="login_button">
                                    <Button href="#" variant="flat" className="flex flex-row w-full h-auto py-2 bg-[#148CEE] text-white rounded-[2px] gap-x-4 justify-center items-center border-none outline-none">
                                        <img src={personLogo} className="w-4 h-4" />
                                        <span className="font-bold">Login</span>
                                    </Button>
                                </DropdownItem>
                            </DropdownSection>
                            {/* Account setting sections and shop/about stuff when mobile*/}
                            <DropdownSection aria-label="Account" showDivider title="Account">
                                <DropdownItem key="Account Settings">Account Settings</DropdownItem>
                                <DropdownItem key="Sign Up">Sign Up</DropdownItem>
                                <DropdownItem key="Support">Support</DropdownItem>
                                <DropdownItem key="Shop" className="sm:hidden flex">Shop</DropdownItem>
                            </DropdownSection>
                            <DropdownSection aria-label="About" showDivider title="About" className="2xl:hidden">
                                <DropdownItem key="Account Blizzard">About Blizzard</DropdownItem>
                                <DropdownItem key="News">News</DropdownItem>
                                <DropdownItem key="BlizzCon">BlizzCon</DropdownItem>
                                <DropdownItem key="Careers" className="sm:hidden flex">Careers</DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>

                    <Button href="#" variant="flat" className="xl:flex hidden flex-row w-[200px] h-[50px] bg-[#148CEE] text-white rounded-[5px] gap-x-4 justify-center items-center">
                        <img src={bnetLogo} className="translate-y-[3px] w-6 h-6" />
                        <span>Download B.NET</span>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComp