'use client';
import React from 'react';
import { Mail, Youtube, Instagram, Facebook, Send, Pin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/data/socials';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">CONTACT <span className="text-[var(--color-orange)]">US</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get in touch with Quwah Zone. We’d love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[var(--color-orange)]">
                            <h3 className="text-2xl font-bold mb-4">If you have questions about:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Training programs",
                                    "Levels & guidance",
                                    "Collaboration",
                                    "Feedback or suggestions"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-orange)]"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-gray-600 font-medium">
                                Feel free to contact us anytime.
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="bg-[var(--color-dark)] text-white p-8 rounded-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <Mail className="text-[var(--color-orange)]" size={32} />
                                <h3 className="text-2xl font-bold">Email</h3>
                            </div>
                            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-xl hover:text-[var(--color-orange)] transition-colors break-all">
                                {SOCIAL_LINKS.email}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Social Media */}
                    <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-2">Social Media</h3>
                        <p className="text-gray-600 mb-8">Follow and message us on our official platforms:</p>

                        <div className="space-y-6">
                            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                                    <Youtube className="text-red-600" size={24} />
                                </div>
                                <span className="text-lg font-medium group-hover:text-red-600 transition-colors">Quwah Zone</span>
                            </a>

                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                <div className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-200 transition-colors">
                                    <Instagram className="text-pink-600" size={24} />
                                </div>
                                <span className="text-lg font-medium group-hover:text-pink-600 transition-colors">@quwahzone</span>
                            </a>

                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                                    <Facebook className="text-blue-600" size={24} />
                                </div>
                                <span className="text-lg font-medium group-hover:text-blue-600 transition-colors">Quwah Zone</span>
                            </a>

                            <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                                    <Pin className="text-red-600" size={24} />
                                </div>
                                <span className="text-lg font-medium group-hover:text-red-600 transition-colors">Pinterest</span>
                            </a>

                            <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                <div className="bg-sky-100 p-3 rounded-full group-hover:bg-sky-200 transition-colors">
                                    <Send className="text-sky-600" size={24} />
                                </div>
                                <span className="text-lg font-medium group-hover:text-sky-600 transition-colors">Telegram</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Final Note */}
                <div className="text-center border-t border-gray-200 pt-12">
                    <p className="text-gray-600 mb-4">We aim to respond as soon as possible.</p>
                    <h4 className="text-2xl md:text-3xl font-bold italic">
                        "Stay disciplined. <span className="text-[var(--color-orange)]">Stay strong.</span>"
                    </h4>
                </div>
            </div>
        </div>
    );
}
