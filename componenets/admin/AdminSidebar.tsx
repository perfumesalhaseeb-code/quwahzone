"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { LayoutDashboard, FileText, Menu, X, LogOut } from 'lucide-react'
import { authService } from '@/libs/auth'
import { useRouter } from 'next/navigation'

export default function AdminSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const navItems = [
        { name: 'Blogs', href: '/admin', icon: FileText },
        { name: 'Categories', href: '/admin/categories', icon: LayoutDashboard },
    ]

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-[1001] p-2 bg-[var(--color-dark)] text-white rounded-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="md:hidden fixed inset-0 bg-black/50 z-[999]"
                />
            )}

            <div className={`w-[240px] h-screen bg-[var(--color-dark)] fixed top-0 left-0 z-[1000] transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
                <div className="p-6 border-b border-gray-800">
                    <h1 className="text-2xl font-bold text-white">Quwah<span className="text-[var(--color-orange)]">Zone</span></h1>
                    <p className="text-gray-400 text-xs mt-1">Admin Panel</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-[var(--color-orange)] rounded-lg transition-colors"
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-lg w-full transition-colors"
                        onClick={async () => {
                            const { error } = await authService.signOut();
                            if (!error) {
                                router.push('/login');
                            }
                        }}
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}
