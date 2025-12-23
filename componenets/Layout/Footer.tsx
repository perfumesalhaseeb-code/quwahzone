import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-20 text-white bg-[var(--color-dark)] border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Brand Section */}
                <div className="text-center md:text-left  ">
                    <Image src="/load.png" alt="Quwah Zone" width={100} height={100} className='mx-auto md:mx-0' />
                    <h2 className="text-3xl font-bold mb-2 mt-6 text-[var(--color-orange)]">Quwah Zone</h2>
                    <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
                        Empowering you to achieve your fitness goals with expert guidance.
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center gap-8 font-medium text-lg">
                    <a href="/" className="hover:text-[var(--color-orange)] transition-colors">Home</a>
                    <a href="/blogs" className="hover:text-[var(--color-orange)] transition-colors">Blogs</a>
                    <a href="/videos" className="hover:text-[var(--color-orange)] transition-colors">Watch Youtube</a>
                    <a href="/about" className="hover:text-[var(--color-orange)] transition-colors">About</a>
                    <a href="/contact" className="hover:text-[var(--color-orange)] transition-colors">Contact</a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <FaFacebook size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                    <FaTwitter size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                    <FaInstagram size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                    <FaLinkedin size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                </div>
            </div>

            {/* Watermark & Copyright */}
            <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col items-center gap-2 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Quwah Zone. All rights reserved.</p>
                <p className="text-[var(--color-orange)] font-medium opacity-80">
                    Developed by Abdullah Habib +923203131380
                </p>
            </div>
        </footer>
    );
}
