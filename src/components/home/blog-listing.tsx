"use client"

import React, { ChangeEvent, useState } from 'react'
import CustomButton from '../ui/customButton';
import BlogCard from './blog-card';
import { ArrowDownBlackIcon, SearchIcon } from '../../../public/icons'
import { UseBlogContext } from '@/Hooks/UseBlogContext';

const BlogListing = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    // Handle search change
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    // Fetch blogs using context API
    const { blogs , isPending, isError } = UseBlogContext();
    // Filter search
    const filteredBlogs = blogs?.slice(24, 30)?.filter((blogs) => searchValue.toLowerCase() === "" ? blogs : blogs?.title?.toLowerCase().includes(searchValue.toLowerCase()))
    

    return (
        <section className='container pt-20 pb-12 bg-gray-1'>
            <h3 className="text-center text-primary text-lg  md:text-xl lg:text-2xl font-semibold mb-10">Stay Updated with the Latest trends in Tobams Group</h3>
            <div className="flex items-center justify-center w-full gap-6 mb-10">
                <div className="bg-white rounded px-3 py-2 flex items-center justify-between w-[30rem] border border-gray-2">
                    <input 
                        type="text"
                        onChange={handleSearchChange} 
                        placeholder='Search by title'
                        className="flex-1 outline-none border-none text-sm" 
                    />
                    <SearchIcon />
                </div>

                <div className="bg-white cursor-pointer rounded px-3 py-2 flex items-center justify-between w-[10rem] border border-gray-2">
                    <p className='text-sm'>All posts</p>
                    <ArrowDownBlackIcon className="size-3" />
                </div>
            </div>

            {/* Blog cards */}
            {
                isPending ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">   
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="flex flex-col h-[25rem]">
                            <div className="h-[57%] w-full rounded-tl-sm rounded-tr-sm bg-gray-300 animate-pulse"></div>
                            <div className="h-[43%] py-4 flex flex-col justify-between">
                                <div>
                                <h3 className="h-3 w-full mb-2 rounded-sm bg-gray-300 animate-pulse"></h3>
                                <p className="h-4 w-full rounded-sm bg-gray-300 animate-pulse"></p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="h-3 w-10 rounded-sm bg-gray-300 animate-pulse"></p>
                                    <p className="h-3 w-6 rounded-sm bg-gray-300 animate-pulse"></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                isError ?
                <div>Error fetching data!</div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs?.length ? (
                        filteredBlogs?.map((blog) => (
                            <BlogCard key={blog?.id} blog={blog} />
                        ))
                        ) : (
                        <p className="text-center text-gray-500 text-lg mt-8">
                            Blog post is not found.
                        </p>
                        )}
                        </div>
                    }

            {
                filteredBlogs && filteredBlogs?.length > 0 && (
                    <div className="flex items-center justify-center w-full my-4">
                        <CustomButton className='py-[.4rem] px-3 border-primary border text-primary font-semibold hover:opacity-80'>Load more</CustomButton>
                    </div>
                )
            }

        </section>
    )
}

export default BlogListing;