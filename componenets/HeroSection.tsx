import React from 'react'

export default function HeroSection({ children, backgroundImage = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" }: { children: React.ReactNode, backgroundImage?: string }) {
    return (
        <div
            className="w-full h-[50vh] min-h-[350px] flex flex-col items-center justify-center text-center px-6 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {children}
        </div>
    )
}


