"use client"

import API from "@/libs";
import { IBlog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleBlog = (blogId: number) => {
    const getSingleBlog = async () => {
        const response: {data: IBlog | null} = await API.get(`/articles/${blogId}`);
        return response.data || null;
    }

    return useQuery({
        queryKey: ['single-blog', blogId],
        queryFn: getSingleBlog,
        enabled: !!blogId,
    })
}