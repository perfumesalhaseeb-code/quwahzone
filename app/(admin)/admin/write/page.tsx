"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { useSearchParams, useRouter } from "next/navigation";
import { blogsService, uploadFilesToBucket, CategoryService, Category } from "@/libs/SupabaseService";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false }) as any;

const categoryService = new CategoryService();

function WriteBlogContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const editId = searchParams.get('id');

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [existingImageUrl, setExistingImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [catigory, setCatigory] = useState("");
    const [newCat, setNewCat] = useState('');
    const [description, setDescription] = useState('');
    const [isPublishing, setIsPublishing] = useState(false);
    const [isLoading, setIsLoading] = useState(!!editId);

    const [categories, setCategories] = useState<Category[]>([]);

    // Auto-generate slug from title only if NOT in edit mode
    useEffect(() => {
        if (!editId && title) {
            const generateSlug = (text: string) => {
                return text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)+/g, "");
            };
            setSlug(generateSlug(title));
        }
    }, [title, editId]);

    // Fetch categories and blog data (if editing)
    useEffect(() => {
        const init = async () => {
            try {
                // Fetch categories
                const cats = await categoryService.getAllCategories();
                setCategories(cats);

                // If editing, fetch blog details
                if (editId) {
                    const blogId = parseInt(editId, 10);
                    if (!isNaN(blogId)) {
                        const blog = await blogsService.getBlogById(blogId);
                        if (blog) {
                            setTitle(blog.title);
                            setSlug(blog.slug);
                            setContent(blog.content);
                            setDescription(blog.description || "");
                            setCatigory(blog.category);

                            const img = typeof blog.image === 'string' ? blog.image : (blog.image[0] || "");
                            setExistingImageUrl(img);
                        }
                    }
                }
            } catch (error) {
                console.error("Error initializing page:", error);
            } finally {
                setIsLoading(false);
            }
        };
        init();
    }, [editId]);

    const handleCatigory = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (newCat) {
            try {
                const newCategory = await categoryService.addCategory({ name: newCat });
                setCategories([...categories, newCategory]);
                setCatigory(newCategory.name);
                setNewCat('');
                alert(`Category "${newCategory.name}" added successfully!`);
            } catch (error) {
                console.error("Error adding category:", error);
                alert("Failed to add category.");
            }
        } else {
            setCatigory('');
        }
    }

    const handlePublish = async () => {
        if (!title || !slug || !content || !catigory) {
            alert("Please fill in all required fields (Title, Slug, Content, Category).");
            return;
        }

        setIsPublishing(true);
        try {
            let imageUrl = existingImageUrl;

            if (imageFile) {
                console.log("Uploading new image...");
                const uploadedUrls = await uploadFilesToBucket([imageFile]);
                if (uploadedUrls && uploadedUrls.length > 0) {
                    imageUrl = uploadedUrls[0];
                    console.log("New image uploaded:", imageUrl);
                }
            }

            const blogData = {
                title,
                slug,
                content,
                description,
                category: catigory,
                image: imageUrl,
                views: 0,
            };

            if (editId) {
                console.log("Updating blog...", blogData);
                const blogId = parseInt(editId, 10);
                if (!isNaN(blogId)) {
                    await blogsService.updateBlog(blogId, blogData, imageUrl);
                    alert("Blog updated successfully!");
                    router.push('/admin'); // Redirect to dashboard after update
                } else {
                    alert("Invalid Blog ID");
                }
            } else {
                console.log("Creating new blog...", blogData);
                await blogsService.addBlog(blogData, imageUrl);
                alert("Blog published successfully!");
                // Reset form
                setTitle("");
                setSlug("");
                setContent("");
                setImageFile(null);
                setExistingImageUrl("");
                setDescription("");
                setCatigory("");
            }

        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Failed to save blog. See console for details.");
        } finally {
            setIsPublishing(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen mt-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-orange)]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen mt-20 p-4 md:p-8 ">
            <div className="max-w-4xl mx-auto">
                <h2 className=" font-bold mb-8 ">
                    {editId ? "Edit" : "Write New"} <i className="text-[var(--color-orange)]">Blog</i>
                </h2>

                <div className="space-y-6 bg-[#2a2a2a] p-6 rounded-xl shadow-lg border border-gray-700">
                    {/* Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter blog title..."
                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                        />
                    </div>

                    {/* Slug Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Slug (Auto-generated)
                        </label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="blog-url-slug"
                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-300 placeholder-gray-500 transition-all"
                        />
                    </div>

                    {/* Image File Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Title Image
                        </label>

                        {existingImageUrl && !imageFile && (
                            <div className="mb-4 relative w-full h-48 rounded-lg overflow-hidden border border-gray-600">
                                <img src={existingImageUrl} alt="Current" className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Current Image</div>
                            </div>
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setImageFile(e.target.files[0]);
                                }
                            }}
                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {imageFile && (
                            <p className="mt-2 text-sm text-gray-400">Selected new image: {imageFile.name}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description..."
                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                        />
                    </div>

                    {/* Catigory option */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category
                        </label>
                        {catigory === "Make catigory" ? (
                            <form onSubmit={handleCatigory} className="flex gap-2">
                                <input
                                    type="text"
                                    value={newCat}
                                    onChange={(e) => setNewCat(e.target.value)}
                                    placeholder="New category name"
                                    className="flex-1 px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCatigory("")}
                                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                            </form>
                        ) : (
                            <select
                                value={catigory}
                                onChange={(e) => setCatigory(e.target.value)}
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                            >
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.name}>
                                        {cat.name}
                                    </option>
                                ))}
                                <option value="Make catigory">Make Category</option>
                            </select>
                        )}
                    </div>

                    {/* Rich Text Editor */}
                    <div className="h-[400px] mb-12">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Content
                        </label>
                        <div className="bg-white text-black rounded-lg overflow-hidden h-[350px]">
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                className="h-[300px]"
                                modules={{
                                    toolbar: [
                                        [{ 'header': [1, 2, 3, false] }],
                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                        ['link'],
                                        ['clean']
                                    ],
                                }}
                            />
                        </div>
                    </div>

                    {/* Publish Button */}
                    <div className="flex justify-end pt-6">
                        <button
                            onClick={handlePublish}
                            disabled={isPublishing}
                            className={`px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ${isPublishing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isPublishing ? "Saving..." : (editId ? "Update Blog" : "Publish Blog")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WriteBlogPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen mt-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-orange)]"></div>
            </div>
        }>
            <WriteBlogContent />
        </Suspense>
    );
}
