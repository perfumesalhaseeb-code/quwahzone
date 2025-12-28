"use client";

import { useEffect } from "react";
import { blogsService } from "@/libs/SupabaseService";

export default function BlogViewCounter({ blogId }: { blogId: number }) {
    useEffect(() => {
        if (blogId) {
            blogsService.AddViews(blogId);
        }
    }, [blogId]);

    return null;
}
