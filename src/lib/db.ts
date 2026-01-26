import fs from 'fs/promises'
import path from 'path'
import { Post } from '@/types/post'

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'post.json')

export async function getPosts(): Promise<Post[]> {
    const data = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(data)
}

export async function addPost(post: Omit<Post, 'id'>): Promise<void> {
    const posts = await getPosts()

    const newPost: Post = {
        ...post,
        id: Date.now() // Уникальный ID
    }

    const updatedPosts = [newPost, ...posts]

    await fs.writeFile(DB_PATH, JSON.stringify(updatedPosts, null, 2))
}