import React from 'react';
import { notFound } from 'next/navigation';
import { PROGRAMS } from '@/data/programs';
import { CheckCircle2, Calendar, Target, AlertCircle, Clock } from 'lucide-react';
import StartProgramButton from '@/componenets/Programs/StartProgramButton';

export function generateStaticParams() {
    return PROGRAMS.map((program) => ({
        slug: program.slug,
    }));
}

export default async function ProgramDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const program = PROGRAMS.find((p) => p.slug === slug);

    if (!program) {
        notFound();
    }

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <div
                className="w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6 relative"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1517963879466-e1b54ebd6694?q=80&w=2069&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase bg-[var(--color-orange)] text-white mb-4">
                    Level {program.id}
                </div>
                <h1 className="text-white text-6xl md:text-8xl mb-6">{program.title}</h1>
                <p className="text-gray-200 text-xl max-w-2xl">
                    {program.description}
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Overview & Schedule */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Target className="text-[var(--color-orange)]" />
                            Program Overview
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {program.longDescription}
                        </p>
                    </section>

                    {/* Benefits */}
                    <section>
                        <h3 className="text-2xl font-bold mb-6">What You'll Gain</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {program.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <CheckCircle2 className="text-[var(--color-orange)]" />
                                    <span className="font-medium text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 30-Day Schedule */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Calendar className="text-[var(--color-orange)]" />
                            30-Day Schedule
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {program.schedule.map((day) => (
                                <div
                                    key={day.day}
                                    className={`rounded-xl p-6 border transition-all duration-300 ${day.isRestDay
                                        ? 'bg-gray-50 border-gray-100 opacity-80'
                                        : 'bg-white border-gray-200 hover:shadow-md hover:border-[var(--color-orange)]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`text-sm font-bold uppercase tracking-wider ${day.isRestDay ? 'text-gray-400' : 'text-[var(--color-orange)]'}`}>
                                            Day {day.day}
                                        </span>
                                        {day.isRestDay && <Clock size={16} className="text-gray-400" />}
                                    </div>

                                    <h3 className={`text-xl font-bold mb-4 ${day.isRestDay ? 'text-gray-500' : 'text-gray-900'}`}>
                                        {day.title}
                                    </h3>

                                    {day.sections ? (
                                        <div className="space-y-6">
                                            {day.sections.map((section, sIdx) => (
                                                <div key={sIdx}>
                                                    <h4 className="text-sm font-bold text-[var(--color-orange)] uppercase tracking-wide mb-3 border-b border-gray-100 pb-1">
                                                        {section.title}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {section.exercises.map((ex, eIdx) => (
                                                            <li key={eIdx} className="text-sm text-gray-700">
                                                                <div className="flex justify-between items-start">
                                                                    <span className="font-medium">{ex.name}</span>
                                                                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded text-xs whitespace-nowrap">
                                                                        {ex.sets} x {ex.reps}
                                                                    </span>
                                                                </div>
                                                                {ex.notes && (
                                                                    <p className="text-xs text-gray-500 mt-0.5 italic">
                                                                        {ex.notes}
                                                                    </p>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            {day.challengeLine && (
                                                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100 text-center">
                                                    <p className="text-sm font-bold text-[var(--color-orange)] italic">
                                                        "{day.challengeLine}"
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ) : !day.isRestDay ? (
                                        <ul className="space-y-2">
                                            {day.exercises.map((ex, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex justify-between">
                                                    <span>{ex.name}</span>
                                                    <span className="font-medium text-gray-400">{ex.sets} x {ex.reps}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">
                                            Take this time to recover. Light activity only.
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Column: Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">

                        {/* Requirements Card */}
                        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <AlertCircle className="text-[var(--color-orange)]" />
                                Prerequisites
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {program.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] mt-2 flex-shrink-0"></div>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full">
                                <StartProgramButton />
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                            <h4 className="font-bold text-[var(--color-orange-light)] mb-2">Need Guidance?</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Not sure if this level is right for you? Contact our coaches for a personalized assessment.
                            </p>
                            <a href="#" className="text-sm font-bold text-[var(--color-orange)] hover:underline">Contact Support →</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
