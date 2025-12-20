import React from 'react'
import Image from 'next/image'

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-dark)]">
            <div className="relative flex items-center justify-center">
                {/* Spinning Circle */}
                <div className="absolute w-32 h-32 border-4 border-[var(--color-orange)] border-t-transparent rounded-full animate-spin"></div>

                {/* Logo */}
                <div className="relative w-20 h-20">
                    <Image
                        src="/load.png"
                        alt="Loading..."
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
