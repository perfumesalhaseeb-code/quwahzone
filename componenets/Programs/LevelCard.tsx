import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface LevelCardProps {
    levelNumber: number;
    title: string;
    description: string;
    exercises: string[];
    slug: string;
    color?: string;
}

export default function LevelCard({ levelNumber, title, description, exercises, slug, color = "var(--color-orange)" }: LevelCardProps) {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
            {/* Header */}
            <div className="p-6 pb-0 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-5xl font-bold text-gray-100 absolute -top-2 -right-2 select-none group-hover:text-orange-50 transition-colors duration-300">
                        {levelNumber}
                    </span>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gray-900 text-white mb-2">
                        Level {levelNumber}
                    </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-[var(--color-orange)] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 my-2"></div>

            {/* Exercises List */}
            <div className="p-6 pt-2 flex-grow">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Core Exercises</h4>
                <ul className="space-y-3">
                    {exercises.map((exercise, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                            <CheckCircle2 size={18} className="text-[var(--color-orange)] mt-0.5 flex-shrink-0" />
                            <span>{exercise}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer / Action */}
            <div className="p-6 pt-0 mt-auto">
                <Link href={`/programs/${slug}`} className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-[var(--color-orange)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    View Program
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
}
