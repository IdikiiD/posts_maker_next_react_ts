import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'


type PostActionsProps = {
    isLiked: boolean
    onLike: () => void
    likesCount: number
    commentsCount: number
}
export default function PostActions({
                                        isLiked,
                                        onLike,
                                        likesCount,
                                        commentsCount
                                    }: PostActionsProps) {
    return (
        <div className="p-3">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onLike}
                        className="hover:opacity-50 transition active:scale-90"
                    >
                        <Heart
                            className={`w-7 h-7 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
                        />
                    </button>
                    <button className="hover:opacity-50 transition active:scale-90">
                        <MessageCircle className="w-7 h-7" />
                    </button>
                    <button className="hover:opacity-50 transition active:scale-90">
                        <Send className="w-7 h-7" />
                    </button>
                </div>
                <button className="hover:opacity-50 transition active:scale-90">
                    <Bookmark className="w-7 h-7" />
                </button>
            </div>

            <div className="font-semibold text-sm mb-2">
                {likesCount.toLocaleString()} отметок "Нравится"
            </div>

            {commentsCount > 0 && (
                <button className="text-gray-500 text-sm hover:text-gray-700">
                    Посмотреть все комментарии ({commentsCount})
                </button>
            )}
        </div>
    )
}