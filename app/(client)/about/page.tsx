import React from 'react';
import { Target, Eye, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import HeroSection from '@/componenets/HeroSection';

export default function AboutPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <HeroSection backgroundImage="/Images/QuwahZoneHeroAbout.jpeg">
                <h1 className="text-white text-6xl md:text-8xl mb-4">ABOUT <span className="text-[var(--color-orange)]">QUWAH ZONE</span></h1>
            </HeroSection>

            {/* Who We Are */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl mb-8">WHO WE <span className="text-[var(--color-orange)]">ARE</span></h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Quwah Zone is a calisthenics and bodyweight training platform built for those who believe that real strength does not come from machines, but from discipline, control, and consistency.
                    </p>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        We focus on natural movement, functional strength, and mental toughness — training the body the way it was meant to move.
                    </p>

                    <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                        <h3 className="text-2xl mb-6 font-bold">Quwah Zone is for:</h3>
                        <ul className="space-y-4 text-left max-w-lg mx-auto">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[var(--color-orange)] shrink-0 mt-1" size={20} />
                                <span>Beginners starting their fitness journey</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[var(--color-orange)] shrink-0 mt-1" size={20} />
                                <span>Young athletes building a strong foundation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[var(--color-orange)] shrink-0 mt-1" size={20} />
                                <span>Adults who want strength without gym dependency</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-xl font-bold italic text-gray-800 space-y-2">
                        <p>No shortcuts.</p>
                        <p>No fake promises.</p>
                        <p className="text-[var(--color-orange)]">Only real work and real results.</p>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 px-6 md:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="text-[var(--color-orange)]" size={40} />
                            <h2 className="text-4xl md:text-5xl m-0">OUR <span className="text-[var(--color-orange)]">MISSION</span></h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                            Our mission is to build strong bodies and disciplined minds through safe, effective, and accessible calisthenics training.
                        </p>
                        <p className="text-gray-600 mb-4">We aim to:</p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Make fitness possible without gyms or machines",
                                "Provide step-by-step guidance for beginners",
                                "Spread correct knowledge and remove fitness myths",
                                "Promote a halal, disciplined, and healthy lifestyle"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] mt-2.5"></div>
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg font-medium border-l-4 border-[var(--color-orange)] pl-4 italic text-gray-700">
                            At Quwah Zone, strength is not just physical — it is mental, emotional, and behavioral.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/Images/QuwahZoneMission.jpeg"
                                alt="Our Mission - Building strong bodies"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <Eye className="text-[var(--color-orange)]" size={40} />
                            <h2 className="text-4xl md:text-5xl m-0">OUR <span className="text-[var(--color-orange)]">VISION</span></h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                            Our vision is to become a trusted global calisthenics platform that inspires people of all ages to train with discipline, purpose, and self-control.
                        </p>
                        <p className="text-gray-600 mb-4">We envision a generation that:</p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Depends on their own body, not equipment",
                                "Values consistency over motivation",
                                "Trains with knowledge, not ego",
                                "Builds strength that lasts a lifetime"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-orange)] mt-2.5"></div>
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-xl font-bold text-gray-800">
                            <p>Quwah Zone is not a trend.</p>
                            <p className="text-[var(--color-orange)]">It is a way of life.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/Images/QuwahZoneVision.jpeg"
                                alt="Our Vision - Looking towards the future"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6 md:px-20 bg-[var(--color-dark)] text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl mb-16">OUR <span className="text-[var(--color-orange)]">CORE VALUES</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { title: "Discipline", subtitle: "over Motivation" },
                            { title: "Consistency", subtitle: "over Intensity" },
                            { title: "Knowledge", subtitle: "over Myths" },
                            { title: "Strength", subtitle: "with Control" },
                            { title: "Progress", subtitle: "without Harm" }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[var(--color-orange)] transition-colors">
                                <Shield className="text-[var(--color-orange)] mx-auto mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                                <p className="text-sm text-gray-400">{value.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-24 px-6 md:px-20 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl mb-8 text-gray-400 font-medium">🖤 FINAL STATEMENT</h2>
                    <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                        "Your body is the gym.<br />
                        <span className="text-[var(--color-orange)]">Your discipline is the equipment.</span>"
                    </blockquote>
                    <p className="text-2xl text-gray-600">Welcome to Quwah Zone.</p>
                </div>
            </section>
        </div>
    );
}
