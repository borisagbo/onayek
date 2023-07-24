// components/Header.js
import React from 'react';
import logo from '../../../public/ONAYEKPERF_LOGO.webp'
import Image from "next/image";

const Header = () => {
    return (
        <header className=" bg-white text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" className="h-8 w-auto" />
                </div>

                {/* Navigation Items */}
                <nav className="hidden md:flex space-x-4">
                    <a href="#" className=" text-black hover:text-gray-300">Home</a>
                    <a href="#" className="text-black hover:text-gray-300">à propos </a>
                    <a href="#" className=" text-black hover:text-gray-300">Matiéres premiéres</a>
                    <a href="#" className=" text-black hover:text-gray-300">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
