"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from "../Button";
import { blogsService, Blog } from "@/libs/SupabaseService";
import Link from 'next/link';

interface BlogCardProps {
    imageUrl: string;
    title: string;
    description: string;
    slug: string;
    category: string;
}

const BlogCard = ({ imageUrl, title, description, slug, category }: BlogCardProps) => (
    <div className="flex flex-col items-start text-left p-0 rounded-xl transition-shadow duration-300 border border-transparent flex-1 bg-white shadow-lg overflow-hidden h-full">
        <div className="w-full h-64 relative">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-sm text-orange-600 shadow-sm uppercase">
                {category || "General"}
            </div>
        </div>
        <div className="p-6 flex flex-col items-start w-full flex-1">
            <h3 className="text-gray-900 mb-3 font-bold text-xl line-clamp-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-1">{description}</p>
            <Link href={`/blogs/${slug}`} className="mt-auto">
                <Button text="Read more" onClick={() => { }} disabled={false} />
            </Link>
        </div>
    </div>
);

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await blogsService.getAllBlogs();
                // Take only the first 3 blogs for the home page
                setBlogs(data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="px-6 md:px-20 py-24 bg-[var(--color-gray)] flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-orange)]"></div>
            </div>
        );
    }

    return (
        <div className="px-6 md:px-20 py-24 bg-[var(--color-gray)]">
            <h2 className="text-center text-gray-800 pb-16 text-3xl font-bold">
                Latest from our <span className="text-[var(--color-orange)]">Blog</span>
            </h2>

            {blogs.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>No blogs available at the moment.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            imageUrl={typeof blog.image === 'string' ? blog.image : (blog.image[0] || '')}
                            title={blog.title}
                            description={blog.description || ''}
                            slug={blog.slug}
                            category={blog.category}
                        />
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-12">
                <Link href="/blogs">
                    <button className="px-8 py-3 border-2 border-[var(--color-orange)] text-[var(--color-orange)] font-semibold rounded-full hover:bg-[var(--color-orange)] hover:text-white transition-all duration-300">
                        View All Blogs
                    </button>
                </Link>
            </div>
        </div>
    );
}
