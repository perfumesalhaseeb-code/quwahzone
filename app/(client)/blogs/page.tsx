import React from "react";
export const dynamic = 'force-dynamic';
import { blogsService, CategoryService } from "@/libs/SupabaseService";
import BlogsPageContent from "@/componenets/BlogsPageContent";
import { Metadata } from "next";

const categoryService = new CategoryService();

export const metadata: Metadata = {
    title: "Blogs",
    description: "Read our latest articles on calisthenics, fitness, and healthy living.",
};

export default async function Page() {
    const [blogsData, categoriesData] = await Promise.all([
        blogsService.getAllBlogs(),
        categoryService.getAllCategories()
    ]);

    const categories = ["All", ...categoriesData.map(c => c.name)];

    return (
        <BlogsPageContent initialBlogs={blogsData} categories={categories} />
    );
}
