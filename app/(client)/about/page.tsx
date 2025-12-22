'use client';
import React from 'react';
import { Target, User, Shield, Users, Heart, CheckCircle } from 'lucide-react';
import Button from '@/componenets/Button';

export default function AboutPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div
                className="w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6 relative"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <h1 className="text-white text-6xl md:text-8xl mb-4">ABOUT <span className="text-[var(--color-orange)]">QUWAH ZONE</span></h1>
                <p className="text-gray-200 text-xl max-w-2xl">
                    Building strength, character, and trust through authentic training.
                </p>
            </div>

            {/* Mission Section */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl mb-6">OUR <span className="text-[var(--color-orange)]">MISSION</span></h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At Quwah Zone, our mission is to empower individuals to discover their true physical potential without relying on expensive equipment or gym memberships. We believe in building a foundation of real strength that translates to everyday life.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We aim to create a community where trust is paramount—trust in your body, trust in the process, and trust in our guidance.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Target size={200} className="text-[var(--color-orange)] opacity-10" />
                    </div>
                </div>
            </section>

            {/* Why Gym-less Training */}
            <section className="py-20 px-6 md:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">WHY <span className="text-[var(--color-orange)]">TRAIN WITHOUT A GYM?</span></h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Freedom is the ultimate strength. We focus on Calisthenics and bodyweight training because your body is the only machine you need.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Functional Strength",
                                desc: "Build muscle that works in harmony with your natural movement patterns.",
                                icon: <CheckCircle className="text-[var(--color-orange)]" size={40} />
                            },
                            {
                                title: "Anywhere, Anytime",
                                desc: "No waiting for machines. No commute. The world is your training ground.",
                                icon: <CheckCircle className="text-[var(--color-orange)]" size={40} />
                            },
                            {
                                title: "Injury Prevention",
                                desc: "Mastering your bodyweight reduces joint stress and improves mobility.",
                                icon: <CheckCircle className="text-[var(--color-orange)]" size={40} />
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-2xl mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder's Vision */}
            <section className="py-20 px-6 md:px-20 bg-[var(--color-dark)] text-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl mb-6">FOUNDER'S <span className="text-[var(--color-orange)]">VISION</span></h2>
                        <h3 className="text-2xl mb-4 text-gray-300">Abdullah Muaz</h3>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            "My vision for Quwah Zone was born from a desire to strip away the unnecessary complexities of modern fitness. I wanted to return to the roots of human strength."
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            "I see a future where everyone has the knowledge and confidence to take charge of their health, guided by principles of discipline, integrity, and sincere effort."
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        {/* Placeholder for Founder Image - using an icon for now or a generic fit person */}
                        <div className="w-full max-w-md aspect-square bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-[var(--color-orange)]">
                            <User size={120} className="text-gray-600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Islamic / Halal Approach */}
            <section className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Shield size={60} className="text-[var(--color-orange)] mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl mb-6">ISLAMIC / HALAL <span className="text-[var(--color-orange)]">APPROACH</span></h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We are committed to providing a training environment that respects Islamic values. This means maintaining modesty in our content, promoting ethical business practices, and fostering a supportive community free from inappropriate influences.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-2 bg-orange-50 text-[var(--color-orange-light)] rounded-full font-medium">Modesty Focused</span>
                        <span className="px-6 py-2 bg-orange-50 text-[var(--color-orange-light)] rounded-full font-medium">Ethical Conduct</span>
                        <span className="px-6 py-2 bg-orange-50 text-[var(--color-orange-light)] rounded-full font-medium">Wholesome Health</span>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20 px-6 md:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">WHO IS THIS <span className="text-[var(--color-orange)]">FOR?</span></h2>
                        <p className="text-xl text-gray-600">Designed for those who seek real change.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl border-l-4 border-[var(--color-orange)]">
                            <div className="flex items-center gap-4 mb-4">
                                <Users className="text-[var(--color-orange)]" size={32} />
                                <h3 className="text-2xl m-0">Youth & Beginners</h3>
                            </div>
                            <p className="text-gray-600">
                                Perfect for young individuals (15+) looking to build a strong foundation, improve confidence, and develop lifelong healthy habits.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border-l-4 border-[var(--color-orange)]">
                            <div className="flex items-center gap-4 mb-4">
                                <Heart className="text-[var(--color-orange)]" size={32} />
                                <h3 className="text-2xl m-0">Busy Professionals</h3>
                            </div>
                            <p className="text-gray-600">
                                Ideal for adults who need efficient, effective workouts that can be done at home without wasting time commuting to a gym.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-3xl mb-6">Ready to start your journey?</h3>
                        <Button text="Join Quwah Zone" onClick={() => { }} disabled={false} />
                    </div>
                </div>
            </section>
        </div>
    );
}
