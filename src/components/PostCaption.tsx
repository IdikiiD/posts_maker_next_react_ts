type PostCaptionProps = {
    username: string
    caption: string
    createdAt: string
}
export default function PostCaption({username, caption, createdAt}: PostCaptionProps) {
    return (
        <div className="px-3 pb-3">
            <div className="mb-1">
                <span className="font-semibold text-sm mr-2">{username}</span>
                <span className="text-sm">{caption}</span>
            </div>
            <time className="text-xs text-gray-500 uppercase">
                {createdAt}
            </time>
        </div>
    )
}