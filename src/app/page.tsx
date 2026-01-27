import PostCard from "@/components/PostCard";

import {Header} from "@/components/Header";
import {getPosts} from "@/lib/db";
export const dynamic = 'force-dynamic'

export default async function Page() {
    const posts = await getPosts()


    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>

            <main className="max-w-[935px] mx-auto px-4 pt-8 pb-20">
                <div className="flex flex-col items-center">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </main>
        </div>
    )
}