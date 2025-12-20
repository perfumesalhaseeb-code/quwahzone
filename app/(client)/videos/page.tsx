"use client";

import React, { useEffect, useState } from "react";

type YouTubeVideo = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
    };
};

export default function Page() {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch("/api/youtube");

                if (!res.ok) {
                    const errorText = await res.text();
                    console.error("API Error Response:", errorText);
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();

                if (Array.isArray(data)) {
                    setVideos(data);
                } else {
                    console.error("Unexpected API response format:", data);
                    setVideos([]);
                }
            } catch (error) {
                console.error("Failed to fetch videos", error);
                setVideos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            {/* Top section */}
            <div
                className="w-full h-[300px] flex flex-col items-start justify-center gap-8 px-6 md:px-20"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1770&auto=format&fit=crop")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="max-w-3xl animate-fade-in-up">
                    <h1 className="text-left leading-tight text-white">
                        THE QUWAH Videos
                    </h1>
                    <p className="text-left text-gray-200">
                        Youtube videos for a healthy lifestyle
                    </p>
                </div>
            </div>

            {/* youtube videos */}
            <div className="px-6 md:px-20 py-24 bg-gray-50">
                {loading ? (
                    <p className="text-center text-gray-500">Loading videos...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {videos.map((video) => (
                            <div
                                key={video.id.videoId}
                                className="w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    title={video.snippet.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
