"use client"
import React, { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { blogsService, Blog } from '@/libs/SupabaseService'

export default function AdminDashboard() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            const data = await blogsService.getAllBlogs()
            setBlogs(data)
        } catch (error) {
            console.error("Error fetching blogs:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            try {
                await blogsService.deleteBlog(id)
                setBlogs(blogs.filter(blog => blog.id !== id))
                alert("Blog deleted successfully")
            } catch (error) {
                console.error("Error deleting blog:", error)
                alert("Failed to delete blog")
            }
        }
    }

    if (loading) {
        return (
            <div className="mt-[70px] flex justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-orange)]"></div>
            </div>
        )
    }

    return (
        <div className="mt-[70px] max-w-7xl mx-auto p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="t font-bold text-gray-900">Blogs</h1>
                    <p className="text-gray-500  mt-1">Manage your blog posts here</p>
                </div>
                <Link href="/admin/write">
                    <button className="flex items-center gap-2 bg-[var(--color-orange)] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-sm">
                        <Plus size={20} />
                        Add Blog
                    </button>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Views</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {blogs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                        No blogs found. Create your first one!
                                    </td>
                                </tr>
                            ) : (
                                blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{blog.title}</div>
                                            <div className="text-sm text-gray-500 line-clamp-1 mt-0.5">{blog.description}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                                                {blog.category || "General"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {/* Note: created_at might not be in the interface yet, but usually returned by Supabase. 
                                                If strict typing fails, we might need to update interface or use a safe fallback. 
                                                For now assuming it might be there or we use current date as fallback if needed, 
                                                but better to just show something static or nothing if missing. 
                                                Actually, let's just show 'N/A' if not available or assume it is part of the object returned even if not in interface.
                                                To be safe with TS, let's cast or update interface. 
                                                Let's update interface in next step if needed. For now, let's just omit or use a placeholder if TS complains.
                                                Wait, I can cast it to any to access created_at safely for display.
                                            */}
                                            {(blog as any).created_at ? new Date((blog as any).created_at).toLocaleDateString() : "N/A"}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {blog?.views}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <Link href={`/blogs/${blog.slug}`} target="_blank">
                                                    <button className="text-gray-400 hover:text-gray-600 transition-colors" title="View">
                                                        <Eye size={18} />
                                                    </button>
                                                </Link>
                                                <Link href={`/admin/write?id=${blog.id}`}>
                                                    <button className="text-gray-400 hover:text-[var(--color-orange)] transition-colors" title="Edit">
                                                        <Edit size={18} />
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => blog.id && handleDelete(Number(blog.id))}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
