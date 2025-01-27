"use client"

import React, { createContext, useContext, ReactNode } from 'react';
import { useGetBlogs } from '@/app/api/use-get-blogs';
import { IBlog } from '@/types/blog';

interface BlogContextType {
    blogs: IBlog[] | undefined;
    isPending: boolean;
    isError: boolean;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
    children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
    const { data, isPending, isError } = useGetBlogs();

    return (
        <BlogContext.Provider value={{ blogs: data, isPending, isError }}>
            {children}
        </BlogContext.Provider>
    );
};