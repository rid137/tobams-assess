"use client"

import { BlogContext } from "@/context/BlogContext";
import { useContext } from "react";

export const UseBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('UseBlogContext must be used within a BlogProvider');
    }
    return context;
};
