"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onComplete }: { onComplete: () => void }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500) // Wait for exit animation
        }, 5000) // Show for 5 seconds

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-dark)] text-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative w-40 h-40 mb-6">
                            <Image
                                src="/load.png"
                                alt="Quwah Zone"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-[var(--color-orange)]">
                            QUWAH ZONE
                        </h1>
                        <p className="mt-4 text-gray-400 text-lg tracking-widest uppercase">
                            Empowering Your Digital Presence
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
