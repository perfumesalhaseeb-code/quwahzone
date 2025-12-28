import React from "react";
import { blogsService } from "@/libs/SupabaseService";
import { Calendar, Eye, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BlogViewCounter from "@/componenets/BlogViewCounter";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = await blogsService.getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: [typeof blog.image === 'string' ? blog.image : (blog.image[0] || '')],
        },
    };
}

export default async function BlogDetailsPage({ params }: Props) {
    const { slug } = await params;
    const blog = await blogsService.getBlogBySlug(slug);

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
        <div className="min-h-screen bg-white text-black pt-32 pb-20 px-4 md:px-8 w-full overflow-x-hidden">
            <BlogViewCounter blogId={blog.id || 0} />
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
                            <Eye size={16} />
                            <span>{blog.views}</span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 break-words">
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
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[var(--color-orange)] break-words overflow-hidden [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>
        </div>
    );
}
