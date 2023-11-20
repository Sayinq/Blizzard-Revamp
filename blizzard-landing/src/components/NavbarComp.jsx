import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import blizzLogo from '../assets/blizz-logo.svg';
import personLogo from '../assets/person-outline.svg';
import bnetLogo from '../assets/bnet-logo.svg';


const NavbarComp = () => {
    return (
        <Navbar className="py-6 bg-transparent">
            <NavbarBrand justify="start" className="scale-[30%]">
                <img src={blizzLogo} />
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button href="#" variant="flat" className="flex flex-row w-[150px] h-[50px] bg-transparent text-white outline outline-2 outline-white rounded-[2px] gap-x-4 justify-center items-center">
                        <img src={personLogo} className="w-6 h-6" />
                        <span>Account</span>
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button href="#" variant="flat" className="flex flex-row w-[250px] h-[50px] bg-[#148CEE] text-white rounded-[2px] gap-x-4 justify-center items-center">
                        <img src={bnetLogo} className="translate-y-[3px] w-6 h-6" />
                        <span>Download B.NET</span>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarComp