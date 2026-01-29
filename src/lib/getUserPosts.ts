import connectDB from "@/lib/connectDB";
import PostModel from "@/models/Post";
import {Post} from "@/types/post";

export async function getUserPosts(userId: string): Promise<Post[]> {
    try {


        await connectDB();

        const posts = await PostModel.find({ userId })
            .sort({ createdAt: -1 })
            .lean();



        const formattedPosts: Post[] = posts.map(post => ({
            id: post._id.toString(),
            _id: post._id.toString(),
            userId: post.userId || "",
            author: {
                username: post.author?.username || "Unknown User",
                email: post.author?.email || "",
                avatar: post.author?.avatar || "",
            },
            image: post.image || "",
            caption: post.caption || "",
            likes: Array.isArray(post.likes) ? post.likes : [],
            comments: post.comments || 0,
            createdAt: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
        }));

        return formattedPosts;
    } catch (error: any) {

        return [];
    }
}