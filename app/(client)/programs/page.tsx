'use client';
import React from 'react';
import LevelCard from '@/componenets/Programs/LevelCard';
import { PROGRAMS } from '@/data/programs';
import HeroSection from '@/componenets/HeroSection';

export default function ProgramsPage() {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* Hero Section */}
            <HeroSection backgroundImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop">
                <h1 className="text-white text-6xl md:text-8xl mb-4">TRAINING <span className="text-[var(--color-orange)]">PROGRAMS</span></h1>
                <p className="text-gray-300 text-xl max-w-2xl">
                    A structured path from beginner to elite. Choose your level and start your ascent.
                </p>
            </HeroSection>

            {/* Levels Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROGRAMS.map((level) => (
                        <LevelCard
                            key={level.id}
                            levelNumber={level.id}
                            title={level.title}
                            description={level.description}
                            exercises={level.exercises.map(e => e.name)}
                            slug={level.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
