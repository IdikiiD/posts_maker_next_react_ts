import {MoreHorizontal} from "lucide-react";

type PostHeaderProps = {
    username: string,
    avatar: string
}

export default function PostHeader({ username, avatar }: PostHeaderProps) {
    return (
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                        <img
                            src={avatar}
                            alt={username}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
                <span className="font-semibold text-sm">{username}</span>
            </div>
            <button className="hover:opacity-50 transition">
                <MoreHorizontal className="w-6 h-6" />
            </button>
        </div>
    )
}