"use client";
import React, { useState } from 'react';
import Button from '../Button';
import { FaTimes, FaBars } from "react-icons/fa";

// Define the type for navigation items
interface NavItem {
    name: string;
    link: string;
}

// NavLinks component to reduce duplication
interface NavLinksProps {
    items: NavItem[];
    isMobile?: boolean;
    onLinkClick?: () => void; // Callback to close mobile menu
}

const NavLinks: React.FC<NavLinksProps> = ({ items, isMobile = false, onLinkClick }) => (
    <>
        <nav className={isMobile ? 'w-full' : ''}>
            <ul className={`flex ${isMobile ? 'flex-col items-center space-y-6' : 'items-center gap-10'}`}>
                {items.map((item, index) => (
                    <li key={item.name} className="flex items-center">
                        <a
                            href={item.link}
                            className={`text-white hover:text-[var(--color-orange)] transition-colors duration-200 ${isMobile ? 'text-xl py-2' : 'px-3'}`}
                            onClick={onLinkClick}
                        >
                            {item.name}
                        </a>
                        {!isMobile && index < items.length - 1 && (
                            <span className="text-white mx-2">|</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
        <div className={isMobile ? 'mt-8' : 'ml-10'}> {/* Add margin for the button */}
            <Button text="Apply" onClick={() => { console.log("Apply") }} disabled={false} />
        </div>
    </>
);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const items: NavItem[] = [
        { name: "Home", link: "/" },
        { name: "Blogs", link: "/blogs" },
        { name: "About", link: "/about" }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 p-3 pl-10 pr-10 w-full flex justify-between items-center bg-[var(--color-dark)]"
        >
            {/* Logo */}
            <div className="flex items-center text-xl font-bold gap-2 text-white">
                <div className='w-8 h-8 rounded-full bg-[var(--color-orange)]'></div>
                <h1 className="text-xl font-bold">Quwah Zone</h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center text-white">
                <NavLinks items={items} />
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
                <button
                    className="text-white hover:text-[var(--color-orange)] transition-colors duration-200 focus:outline-none"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[var(--color-dark)]/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                >
                    <div className="absolute top-5 right-5">
                        <FaTimes onClick={toggleMenu} size={30} className="text-white cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                    </div>
                    <NavLinks items={items} isMobile={true} onLinkClick={toggleMenu} />
                </div>
            )}
        </header>
    );
}
