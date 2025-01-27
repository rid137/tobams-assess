import React from 'react';
import Image from 'next/image';
import { formatDate } from '@/utils/helpers';
import { IBlog } from '@/types/blog';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
    blog: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({
    blog: { id, title, description, cover_image, created_at, reading_time_minutes },
}) => {
    const router = useRouter();
    
    const goToBlogDetails = (id: string) => {
        router.push(`/blog-details/${id}`)
    }
    

    return (
        <article key={id} className="overflow-hidden flex flex-col h-[25rem]">
            <div className="h-[57%] relative">
                <Image
                    src={
                        cover_image?.length > 0
                        ? cover_image
                        : '/images/free-images.jpg'
                    }
                    width={1000}
                    height={1000}
                    alt={title}
                    className="h-full w-full object-cover rounded-tl-sm rounded-tr-sm"
                />
                <p className="absolute top-3 left-3 rounded text-primary bg-white/50 text-sm p-2 font-medium">
                    Training and Development
                </p>
            </div>
            <div className="h-[43%] py-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-dark mb-2 line-clamp-2">{title}</h3>
                    <p className="text-sm text-gray line-clamp-2">{description}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray">
                    <div className="flex items-center gap-3">
                        <p>{formatDate(created_at)}</p>
                        <p className="bg-gray h-3 w-[.10rem] rounded-sm"></p>
                        <p>{reading_time_minutes} mins read</p>
                    </div>
                    <button
                        onClick={() => goToBlogDetails(id.toString())}
                        className="text-primary border-b border-primary text-sm cursor-pointer"
                    >
                        View Post
                    </button>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
