type PostImageProps = {
    imageUrl: string
    alt: string
    onDoubleClick: () => void
}


export default function PostImage({imageUrl, alt, onDoubleClick}: PostImageProps) {
    return (
        <div
            className="w-full aspect-square bg-gray-100 cursor-pointer select-none"
            onDoubleClick={onDoubleClick}
        >
            <img
                src={imageUrl}
                alt={alt}
                className="w-full h-full object-cover"
                draggable={false}
            />
        </div>
    )
}