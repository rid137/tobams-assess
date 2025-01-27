"use client"

import React from 'react';
import Image from 'next/image';
import { useGetSingleBlog } from '@/app/api/use-get-single-blog';
import RenderMarkdown from '@/components/blog-details/markdown';
import CustomButton from '@/components/ui/customButton';
import { formatDate } from '@/utils/helpers';
import { ArrowLeftIcon } from '../../../../../public/icons';
import { useRouter } from 'next/navigation';
import { UseBlogContext } from '@/Hooks/UseBlogContext';
import BlogCard from '@/components/home/blog-card';


const BlogDetails = ({ params }: { params: Promise<{ id: string }> }) => {
    // Destructure id from params object
    const { id } = React.use(params);
    // Fetch single blog
    const { data: blog, isPending, isError } = useGetSingleBlog(parseInt(id));
    // Fetch blogs using context API
    const { blogs , isPending: isFetchingBlogs, isError: blogsError } = UseBlogContext()
    const router = useRouter();
    // Handle back button click
    const handleBackClick = () => {
        router.back()
    };

    return (
        <section className='container bg-gray-1 pt-6 pb-12'>
            <div onClick={handleBackClick} className="rounded py-1 px-2 flex shadow border items-center mb-6 w-fit cursor-pointer gap-2">
                <ArrowLeftIcon className="size-3" />
                <p className='text-sm'>Back</p>
            </div>
            {
                isPending ?
                <div className="">
                    <p className="rounded w-20 h-4 bg-gray-300 animate-pulse mb-4"></p>
                    <h1 className="rounded w-full h-10 bg-gray-300 animate-pulse mb-6"></h1>
                    <p className="rounded w-14 h-4 bg-gray-300 animate-pulse mb-8"></p>

                    <div className="bg-gray-300 animate-pulse w-full h-[28rem] object-cover rounded-md my-6"></div>
                    <div className="bg-gray-300 animate-pulse w-full h-4 object-cover rounded-md mb-2"></div>
                    <div className="bg-gray-300 animate-pulse w-full h-4 object-cover rounded-md mb-2"></div>
                    <div className="bg-gray-300 animate-pulse w-full h-4 object-cover rounded-md mb-2"></div>
                    <div className="bg-gray-300 animate-pulse w-full h-4 object-cover rounded-md mb-6"></div>
                </div>
                :
                isError ?
                <div className="">Error fetching blog details</div>
                :
                <>
                    <p className="rounded text-primary bg-[#CBCBCB] w-fit text-sm p-2 font-medium">Training and Development</p>
                    <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4 mb-6">{blog?.title}</h1>
                    <p className="text-sm text-gray">{formatDate(blog?.created_at)}</p>

                    <div className="mb-6">
                        <Image 
                            src={
                                    blog && blog?.cover_image?.length > 0
                                    ? blog?.cover_image
                                    : '/images/free-images.jpg'
                                }
                            width={1000} 
                            height={1000} 
                            alt={blog?.title || "Blog image"}
                            className="w-full h-[28rem] object-cover rounded-md mt-6" 
                        />
                    </div>

                    <div className="mb-8">
                        <RenderMarkdown content={blog?.body_markdown} bodyHtml={blog?.body_html} />
                    </div>
                </>
            }
            {/* More articles */}
            {blogs && blogs?.length > 0 && <p className="text-center font-semibold text-primary mb-6">More articles</p>}
            {
                isFetchingBlogs ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">   
                    {Array.from({ length: 3 }).map((_, index) => (
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
                blogsError ?
                <div>Error fetching blogs!</div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        blogs?.slice(12, 15)?.map((blog) => (
                            <BlogCard key={blog?.id} blog={blog} />
                        ))
                    }
                </div>
            }

            {
                blogs && blogs?.length > 0 && (
                    <div className="flex items-center justify-center w-full my-4">
                        <CustomButton className='py-[.4rem] px-3 border-primary border text-primary font-semibold hover:opacity-80'>Explore more</CustomButton>
                    </div>
                )
            }
        </section>
    )
}

export default BlogDetails