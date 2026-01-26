'use client'
import {ArrowLeft, ImageIcon, MapPin, Smile} from "lucide-react";
import {Header} from "@/components/Header";
import {createPost} from "@/app/actions/posts";

export default function CreatePostPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-[935px] mx-auto px-4 pt-8 pb-20">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

                    {/* ФОРМА НАЧИНАЕТСЯ ЗДЕСЬ */}
                    <form action={createPost}>

                        {/* Image Upload Area */}
                        <div className="aspect-square bg-gray-100 flex flex-col items-center justify-center border-b border-gray-200">
                            <ImageIcon className="w-20 h-20 text-gray-400 mb-4"/>
                            <p className="text-gray-600 text-lg mb-2">Введите URL картинки</p>
                            <input
                                type="text"
                                name="image"  // ← ОБЯЗАТЕЛЬНО!
                                placeholder="https://example.com/image.jpg"
                                className="border border-gray-300 rounded px-4 py-2 w-80"
                                required
                            />
                        </div>

                        {/* Form Section */}
                        <div className="p-6">

                            {/* User Info */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                                        <div className="w-full h-full rounded-full bg-gray-300"></div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="username"  // ← ОБЯЗАТЕЛЬНО!
                                    placeholder="your_username"
                                    className="font-semibold border-none outline-none"
                                    required
                                />
                            </div>

                            {/* Caption Input */}
                            <div className="mb-6">
                                <textarea
                                    name="caption"  // ← ОБЯЗАТЕЛЬНО!
                                    placeholder="Добавьте описание..."
                                    className="w-full h-32 resize-none border-none outline-none text-base placeholder-gray-400"
                                    required
                                />
                                <div className="flex items-center gap-4 mt-2">
                                    <button type="button" className="text-gray-400 hover:text-gray-600 transition">
                                        <Smile className="w-6 h-6"/>
                                    </button>
                                    <span className="text-gray-400 text-sm ml-auto">0/2,200</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-6"></div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                            >
                                Опубликовать
                            </button>

                        </div>
                    </form>
                    {/* ФОРМА ЗАКАНЧИВАЕТСЯ ЗДЕСЬ */}

                </div>
            </main>
        </div>
    )
}