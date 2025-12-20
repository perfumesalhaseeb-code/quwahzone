import React from 'react';

export default function YT() {
    const videos = [
        "https://www.youtube.com/embed/6WvHMNfH3ao", // Surah Ar-Rahman - Mishary Alafasy
        "https://www.youtube.com/embed/KTYitGaV16M", // Surah Al-Baqarah - Full
        "https://www.youtube.com/embed/2_YI0N37-v4"  // Surah Yasin - Heart Soothing
    ];

    return (
        <div className="px-6 md:px-20 py-24 bg-gray-50">
            <h2 className="text-center text-gray-800 pb-16">
                Latest <span className="text-[var(--color-orange)]">Workouts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {videos.map((src, index) => (
                    <div key={index} className="w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <iframe
                            width="100%"
                            height="100%"
                            src={src}
                            title={`YouTube video player ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}
