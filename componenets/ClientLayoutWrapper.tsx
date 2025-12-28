"use client";

import { useEffect, useState } from "react";
import Intro from "@/componenets/Intro";
import Loader from "@/componenets/Loader";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showIntro, setShowIntro] = useState(true);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== '/') {
            setShowIntro(false);
        }
    }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    // Simple global loader simulation for route changes
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500); // Simulate load
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {showIntro && pathname === '/' && <Intro onComplete={handleIntroComplete} />}
            {loading && !showIntro && <Loader />}
            {/* Only show loader if intro is not showing, to avoid overlap/clutter */}

            {!showIntro && children}
        </>
    );
}
