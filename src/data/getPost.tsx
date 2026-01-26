import PostCard from '@/components/PostCard'
import { Post } from '@/types/post'

export async function getPosts(): Promise<Post[]> {
    return [
        {
            id: 1,
            author: {
                username: 'travel.lover',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
            },
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
            caption: 'Невероятный закат в горах 🏔️✨ Природа всегда удивляет своей красотой!',
            likes: 1247,
            comments: 89,
            createdAt: '2 часа назад'
        },
        {
            id: 2,
            author: {
                username: 'foodie_daily',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
            },
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
            caption: 'Идеальная пицца не существу... О, подождите! 🍕 Рецепт в stories',
            likes: 3891,
            comments: 234,
            createdAt: '5 часов назад'
        },
        {
            id: 3,
            author: {
                username: 'urban.explorer',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3'
            },
            image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop',
            caption: 'Архитектура города никогда не перестаёт вдохновлять 🏙️',
            likes: 567,
            comments: 45,
            createdAt: '1 день назад'
        }
    ]
}