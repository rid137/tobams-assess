"use client"

import API from "@/libs";
import { IBlog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = () => {
    const getBlogs = async () => {
        const response: {data: IBlog[] | null} = await API.get(`/articles`);
        return response.data || [];
    }

    return useQuery({
        queryKey: ['blog-list'],
        queryFn: getBlogs,
    })
}