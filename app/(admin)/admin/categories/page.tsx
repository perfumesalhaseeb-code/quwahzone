"use client"
import React, { useEffect, useState } from 'react'
import { Plus, Trash2, Save, Loader2 } from 'lucide-react'
import { categoryService, Category } from '@/libs/SupabaseService'

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [newCategoryName, setNewCategoryName] = useState('')
    const [adding, setAdding] = useState(false)
    // Track editing state for each category if needed, or just update on blur/save
    // For inline editing as requested: "name of catiiry will change inti input box"
    // We can make the name an input field always, or toggle.
    // Let's make it an input field that updates state, and a save button or auto-save.
    // To avoid too many requests, let's use a save button or onBlur with check.
    // User said: "he can just do it as name of catiiry will change inti input box and on same page he can do"
    // I will make the list items have input fields.

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const data = await categoryService.getAllCategories()
            setCategories(data)
        } catch (error) {
            console.error("Error fetching categories:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newCategoryName.trim()) return

        setAdding(true)
        try {
            const newCategory = await categoryService.addCategory({ name: newCategoryName })
            setCategories([...categories, newCategory])
            setNewCategoryName('')
        } catch (error) {
            console.error("Error adding category:", error)
            alert("Failed to add category")
        } finally {
            setAdding(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure? This action cannot be undone.")) return

        try {
            await categoryService.deleteCategory(id)
            setCategories(categories.filter(c => c.id !== id))
        } catch (error) {
            console.error("Error deleting category:", error)
            alert("Failed to delete category")
        }
    }

    const handleUpdate = async (id: number, newName: string) => {
        try {
            await categoryService.updateCategory(id, { name: newName })
            // Optional: show success feedback
        } catch (error) {
            console.error("Error updating category:", error)
            alert("Failed to update category")
        }
    }

    const handleNameChange = (id: number, newName: string) => {
        setCategories(categories.map(c => c.id === id ? { ...c, name: newName } : c))
    }

    if (loading) {
        return (
            <div className="mt-[70px] flex justify-center p-8">
                <Loader2 className="animate-spin h-8 w-8 text-[var(--color-orange)]" />
            </div>
        )
    }

    return (
        <div className="mt-[70px] max-w-4xl mx-auto p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-[var(--color-dark)]">Categories</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your blog categories</p>
            </div>

            {/* Add New Category */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-[var(--color-dark)]">Add New Category</h2>
                <form onSubmit={handleAdd} className="flex gap-4">
                    <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="Enter category name..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] outline-none transition-all"
                    />
                    <button
                        type="submit"
                        disabled={adding || !newCategoryName.trim()}
                        className="bg-[var(--color-orange)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color-orange-light)] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {adding ? <Loader2 className="animate-spin h-5 w-5" /> : <Plus size={20} />}
                        Add
                    </button>
                </form>
            </div>

            {/* Categories List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                <th className="px-6 py-4">Category Name</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {categories.length === 0 ? (
                                <tr>
                                    <td colSpan={2} className="px-6 py-8 text-center text-gray-500">
                                        No categories found.
                                    </td>
                                </tr>
                            ) : (
                                categories.map((category) => (
                                    <tr key={category.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <input
                                                type="text"
                                                value={category.name}
                                                onChange={(e) => handleNameChange(Number(category.id), e.target.value)}
                                                onBlur={(e) => handleUpdate(Number(category.id), e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.currentTarget.blur()
                                                    }
                                                }}
                                                className="w-full bg-transparent border-none focus:ring-0 p-0 font-medium text-gray-900 placeholder-gray-400 focus:bg-white focus:px-2 focus:py-1 focus:rounded focus:shadow-sm transition-all"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(Number(category.id))}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
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
