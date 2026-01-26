'use client'


import {Post} from "@/types/post";
import PostHeader from "@/components/PostHeader";
import PostImage from "@/components/PostImage";
import PostActions from "@/components/PostActions";
import PostCaption from "@/components/PostCaption";
import React, {useState} from "react";
import {Header} from "@/components/Header";

type PostCardProps = {
    post: Post
}
export default function PostCard({ post }: PostCardProps) {
    const [isLiked, setIsLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(post.likes)

    const handleLike = () => {
        if (isLiked) {
            setLikesCount(post.likes + 1)
        }else {
            setLikesCount(likesCount + 1)
        }
        setIsLiked(!isLiked)

    }
    return(
        <article className="bg-white border border-gray-200 rounded-lg mb-6 max-w-[470px] w-full">

            <PostHeader
                username={post.author.username}
                avatar={post.author.avatar}
            />

            <PostImage
                imageUrl={post.image}
                alt={`Post by ${post.author.username}`}
                onDoubleClick={handleLike}
            />

            <PostActions
                isLiked={isLiked}
                onLike={handleLike}
                likesCount={likesCount}
                commentsCount={post.comments}
            />

            <PostCaption
                username={post.author.username}
                caption={post.caption}
                createdAt={post.createdAt}
            />
        </article>
    )
}