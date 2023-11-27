import React from 'react'
import { Link } from '@nextui-org/react'

import blizzLogo from '../assets/blizz-logo.svg';

const Footer = () => {
    return (
        <section className="flex flex-col w-screen h-auto items-center xl:pb-36 xl:py-0 py-8">
            <div id="blizzard-image" className="xl:w-48 xl:h-48 w-32 h-32">
                <img src={blizzLogo} className="xl:scale-[150%]" />
            </div>
            <div id="quicklinks" className="flex flex-wrap items-center justify-center gap-x-2 uppercase text-zinc-600">
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    Careers
                </Link>
                <span>|</span>
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    About
                </Link>
                <span>|</span>
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    Support
                </Link>
                <span>|</span>
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    Contact Us
                </Link>
                <span>|</span>
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    Press
                </Link>
                <span>|</span>
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    API
                </Link>
                <span>|</span>
                <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                    Site Map
                </Link>
            </div>
            <div id="trademark" className="flex lg:flex-col flex-wrap text-center justify-center items-center mt-12 text-zinc-500">
                <span>© 2023 Blizzard Entertainment, Inc</span>
                <span>All trademarks referenced herein are the properties of their respective owners.</span>
                <div id="trademark-links" className="flex flex-wrap items-center justify-center gap-x-2 uppercase text-zinc-600">
                    <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                        Privacy
                    </Link>
                    <span>|</span>
                    <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                        Legal
                    </Link>
                    <span>|</span>
                    <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                        Terms
                    </Link>
                    <span>|</span>
                    <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                        Cookie Policy
                    </Link>
                    <span>|</span>
                    <Link href="" className="text-zinc-400 hover:text-white transition-all duration-100 ease-in-out">
                        Cookie Settings
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer