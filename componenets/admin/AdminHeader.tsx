"use client"
import React, { useState } from 'react'
import { Search, Bell, User } from 'lucide-react'

export default function AdminHeader() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className='ml-0 md:ml-[240px] fixed top-0 right-0 left-0 h-[70px] bg-white border-b border-gray-200 z-[900] flex items-center justify-between px-6'>
            {/* Search */}
            <div className="relative w-full max-w-[400px] hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 ml-auto">
                <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className=" hidden sm:block ">
                        <span className="text-sm font-semibold text-gray-900">Admin User</span>
                        <br />
                        <span className="text-xs text-gray-500">Administrator</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-orange)] flex items-center justify-center text-white shadow-md">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}
