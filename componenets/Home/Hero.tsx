import React from 'react'
import Button from '../Button'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className='w-full h-screen min-h-[600px] flex flex-col items-start justify-center gap-8 px-6 md:px-20'
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/Images/QuwahZoneHeroMain.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
            <div className="max-w-3xl animate-fade-in-up">
                <h1 className='text-left leading-tight text-white text-7xl'>
                    UNLEASH YOUR <br />
                    <span className="text-[var(--color-orange)]">TRUE POTENTIAL</span>
                </h1>
                <p className='text-left text-gray-200'>
                    Experience world-class training designed to push your limits.
                    Whether you're a beginner or a pro, Quwah Zone is your ultimate destination for strength and resilience.
                </p>
                <div className="flex gap-4">
                    <Link href="/programs">
                        <Button text="Start Journey" onClick={() => { }} disabled={false} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
