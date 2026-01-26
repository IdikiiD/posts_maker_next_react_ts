'use server'

import { addPost } from '@/lib/db'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
    const username = formData.get('username') as string
    const caption = formData.get('caption') as string
    const image = formData.get('image') as string

    await addPost({
        author: {
            username: username || 'anonymous',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`
        },
        image: image || 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop',
        caption,
        likes: 0,
        comments: 0,
        createdAt: 'только что'
    })

    redirect('/')
}