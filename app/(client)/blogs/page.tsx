"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsService, Blog, CategoryService, Category } from "@/libs/SupabaseService";
import HeroSection from "@/componenets/HeroSection";

const categoryService = new CategoryService();

export default function Page() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [categories, setCategories] = useState<string[]>(["All"]);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [blogsData, categoriesData] = await Promise.all([
                    blogsService.getAllBlogs(),
                    categoryService.getAllCategories()
                ]);

                setBlogs(blogsData);
                setCategories(["All", ...categoriesData.map(c => c.name)]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredBlogs = activeCategory === "All"
        ? blogs
        : blogs.filter(blog => blog.category === activeCategory);

    const topBlog = blogs.length > 0 ? blogs[0] : null;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-orange)]"></div>
            </div>
        );
    }

    return (
        <div>
            {/* Top section */}
            <div className="relative">
                <HeroSection backgroundImage="/Images/QuwahZoneHeroBlog.png">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className='text-left leading-tight text-white'>
                            THE QUWAH BLOGS
                        </h1>
                        <p className='text-left text-gray-200'>
                            Science based advice for a healthy lifestyle
                        </p>
                    </div>
                </HeroSection>

                {/* Categories Bar */}
                <div className='w-[90%] md:w-[80%] bg-white font-bold p-4 absolute bottom-[-30px] left-1/2 -translate-x-1/2 shadow-lg overflow-x-auto no-scrollbar rounded-lg'>
                    <div className='flex items-center gap-8 px-4 whitespace-nowrap'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className='text-sm tracking-widest transition-all duration-300'
                                style={{
                                    color: activeCategory === category ? 'var(--color-black)' : '#9CA3AF',
                                    borderBottom: activeCategory === category ? '3px solid var(--color-orange)' : '3px solid transparent',
                                    paddingBottom: '4px'
                                }}
                            >
                                {category.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* top blog */}
            {topBlog && (
                <div className="px-6 md:px-20 py-24 flex flex-col items-start justify-center gap-8">
                    <Link href={`/blogs/${topBlog.slug}`} className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-lg group block">
                        <Image
                            src={typeof topBlog.image === 'string' ? topBlog.image : (topBlog.image[0] || '')}
                            alt={topBlog.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 100vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h2 className="text-3xl font-bold mb-2">{topBlog.title}</h2>
                            <p className="text-gray-200 line-clamp-2">{topBlog.description}</p>
                        </div>
                    </Link>
                </div>
            )}

            {/* all blogs */}
            <div className="flex flex-col items-start justify-center gap-8 px-6 md:px-20 mb-20">
                {filteredBlogs.length === 0 ? (
                    <div className="w-full text-center py-10 text-gray-500">
                        No blogs found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                        {filteredBlogs.map((blog, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={typeof blog.image === 'string' ? blog.image : (blog.image[0] || '')}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-sm text-orange-600 shadow-sm uppercase">
                                        {blog.category || "General"}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                        {blog.title}
                                    </h4>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {blog.description}
                                    </p>

                                    <Link href={`/blogs/${blog.slug}`} className="flex items-center text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors mt-auto group/btn">
                                        READ MORE
                                        <span className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
