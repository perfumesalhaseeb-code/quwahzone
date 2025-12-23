"use client";

import React, { useState } from 'react';
import { DaySchedule } from '@/data/programs';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

interface DayAccordionProps {
    day: DaySchedule;
    defaultOpen?: boolean;
}

export default function DayAccordion({ day, defaultOpen = false }: DayAccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${day.isRestDay
                ? 'bg-gray-50 border-gray-100'
                : 'bg-white border-gray-200 hover:border-[var(--color-orange)]'
                }`}
        >
            {/* Header - Clickable */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <span className={`text-sm font-bold uppercase tracking-wider ${day.isRestDay ? 'text-gray-400' : 'text-[var(--color-orange)]'}`}>
                            Day {day.day}
                        </span>
                        {day.isRestDay && <Clock size={16} className="text-gray-400" />}
                    </div>
                    <h3 className={`text-xl font-bold ${day.isRestDay ? 'text-gray-500' : 'text-gray-900'}`}>
                        {day.title}
                    </h3>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className={day.isRestDay ? 'text-gray-400' : 'text-[var(--color-orange)]'} />
                </div>
            </button>

            {/* Content - Collapsible */}
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
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
            </div>
        </div>
    );
}
