export type Post = {
    id: number
    author:{
        username: string
        avatar: string
    }
    image: string
    caption: string
    likes: number
    comments:number
    createdAt: string
}