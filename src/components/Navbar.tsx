import { useState } from 'react'
import { Button } from './ui/button'
import { IoMenuOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';

export const Navbar = (): JSX.Element => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-5 md:px-30 py-4 font-poppins font-bold ">
                {/* Logo */}
                <Link to="/" className="relative inline-block text-2xl  font-bold tracking-[3px] ml-0  ">
                    SC&nbsp;&nbsp;&nbsp;ZA
                    <img
                        src="scaza-logo.png"
                        alt="Scaza Logo"
                        className="absolute top-1 left-10 h-5 w-5 "
                    />
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-10 w-[40%] ">
                    <li>
                        <Link to="/" className="">Personal</Link>
                    </li>
                    <li>
                        <Link to="/" className="">Business</Link>
                    </li>
                    <li>
                        <Link to="/team" className="">Company</Link>
                    </li>
                    <li>
                        <Link to="/faq" className="">Help</Link>
                    </li>
                </ul>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-5 w-[20%] pr-[40px]">

                    <Button className="bg-[#225C07] ">
                        Join Scaza
                    </Button>
                </div>

                {/* Hamburger */}
                <div className="md:hidden">
                    <IoMenuOutline size={28} onClick={() => setShowMenu(!showMenu)} />
                    {
                        showMenu && (
                            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-full h-[300px] text-center">
                                <ul className="flex flex-col gap-10 p-2">
                                    <li>
                                        <a href="/" className="">Personal</a>
                                    </li>
                                    <li>
                                        <a href="/" className="">Business</a>
                                    </li>
                                    <li>
                                        <a href="/team" className="">Company</a>
                                    </li>
                                    <li>
                                        <a href="/faq" className="">Help</a>
                                    </li>
                                </ul>
                                <div className="p-5">
                                    <Button className="bg-[#225C07] w-[50%]">
                                        Join Scaza
                                    </Button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

