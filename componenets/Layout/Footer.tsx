import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-20 text-white bg-[var(--color-dark)]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Brand Section */}
                <div className="max-w-sm">
                    <h2 className="text-2xl font-bold mb-4">Quwah Zone</h2>
                    <p className="text-gray-400 mb-6">
                        Empowering you to achieve your fitness goals with expert guidance and a supportive community.
                    </p>
                    <div className="flex gap-4">
                        <FaFacebook size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                        <FaTwitter size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                        <FaInstagram size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                        <FaLinkedin size={24} className="cursor-pointer hover:text-[var(--color-orange)] transition-colors" />
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex gap-16">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[var(--color-orange)]">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[var(--color-orange)]">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                            <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Quwah Zone. All rights reserved.
            </div>
        </footer>
    );
}
