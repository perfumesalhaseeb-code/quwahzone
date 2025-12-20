"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blogsService, Blog } from "@/libs/SupabaseService";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogDetailsPage() {
    const { slug } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) return;
            try {
                const data = await blogsService.getBlogBySlug(slug as string);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-orange)]"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
                <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
                <Link href="/blogs" className="text-[var(--color-orange)] hover:underline">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-orange)] mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Blogs</span>
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-[var(--color-orange)] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                            {blog.category || "General"}
                        </span>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>Admin</span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
                        {blog.title}
                    </h1>
                </div>

                {/* Featured Image */}
                {blog.image && (
                    <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 relative shadow-lg">
                        <Image
                            src={typeof blog.image === 'string' ? blog.image : blog.image[0]}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[var(--color-orange)]">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>
        </div>
    );
}
