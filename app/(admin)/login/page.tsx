'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/libs/auth'
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react'
import "@/app/globals.css";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { data, error } = await authService.signIn(email, password)

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push('/admin')
            console.log(data)
            // Keep loading true while redirecting
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center p-4 bg-[var(--color-gray)]'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden'>
                <div className='p-8'>
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl font-bold text-[var(--color-dark)] mb-2'>Welcome Back</h1>
                        <p className='text-gray-500'>Sign in to access your admin dashboard</p>
                    </div>

                    {error && (
                        <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r'>
                            <p className='font-medium'>Authentication Error</p>
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium text-[var(--color-dark)] mb-2'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <Mail className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    type='email'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] transition-colors outline-none text-black'
                                    placeholder='you@example.com'
                                />
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[var(--color-dark)] mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <Lock className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    type='password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] transition-colors outline-none text-black'
                                    placeholder='••••••••'
                                />
                            </div>
                        </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[var(--color-orange)] hover:bg-[var(--color-orange-light)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-orange)] font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer'
                        >
                            {loading ? (
                                <>
                                    <Loader2 className='animate-spin -ml-1 mr-2 h-5 w-5' />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className='ml-2 h-5 w-5' />
                                </>
                            )}
                        </button>
                    </form>
                </div>
                <div className='px-8 py-4 bg-gray-50 border-t border-gray-100 text-center'>
                    <p className='text-xs text-gray-500'>
                        Protected by QuwahZone Security
                    </p>
                </div>
            </div>
        </div>
    )
}
