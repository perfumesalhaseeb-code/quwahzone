import React from 'react';
import Image from 'next/image';

interface MythCardProps {
    imageUrl: string;
    label: string;
    type: 'myth' | 'fact';
}

const MythCard = ({ imageUrl, label, type }: MythCardProps) => {
    const isMyth = type === 'myth';
    const accentColor = isMyth ? 'text-red-500' : 'text-green-500';
    const bgColor = isMyth ? 'bg-red-500' : 'bg-green-500';

    return (
        <div className="flex flex-col gap-5 w-full md:w-1/2 group">
            <div
                className="relative h-80 overflow-hidden shadow-xl rounded-lg"
            >
                <Image
                    src={imageUrl}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                <div className="absolute top-6 left-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl ${bgColor}`}>
                        {isMyth ? (
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                <span className={`${accentColor} mr-2`}>
                    {type}:
                </span>
                {label}
            </div>
        </div>
    );
};

const CARDS: MythCardProps[] = [
    {
        imageUrl: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=387&auto=format&fit=crop",
        label: "Weightlifting is unsafe for youth",
        type: 'myth'
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=398&auto=format&fit=crop",
        label: "Supervised training builds strength and confidence",
        type: 'fact'
    }
];

export default function Myth() {
    return (
        <section className="px-6 md:px-20 py-24 bg-[var(--color-blue)]">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-black text-4xl md:text-6xl pb-16 text-center uppercase italic tracking-tighter text-white">
                    Stop believing <span className="text-red-500">lies</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    {CARDS.map((card, index) => (
                        <MythCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
