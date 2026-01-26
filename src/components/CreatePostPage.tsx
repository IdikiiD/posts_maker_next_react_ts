'use client'
import {ArrowLeft, ImageIcon, MapPin, Smile} from "lucide-react";
import {Header} from "@/components/Header";
import {useState} from "react";



export default function CreatePostPage() {



    return (
        <div className="min-h-screen bg-gray-50">
            <Header />


            {/* Main Content */}
            <main className="max-w-[935px] mx-auto px-4 pt-8 pb-20">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

                    {/* Image Upload Area */}
                    <div
                        className="aspect-square bg-gray-100 flex flex-col items-center justify-center border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition">
                        <ImageIcon className="w-20 h-20 text-gray-400 mb-4"/>
                        <p className="text-gray-600 text-lg mb-2">Перетащите фото сюда</p>
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
                            Выбрать с компьютера
                        </button>
                    </div>

                    {/* Form Section */}
                    <div className="p-6">

                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                                <div className="w-full h-full rounded-full bg-white p-[2px]">
                                    <div className="w-full h-full rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                            <span className="font-semibold">your_username</span>
                        </div>

                        {/* Caption Input */}
                        <div className="mb-6">
              <textarea
                  placeholder="Добавьте описание..."
                  className="w-full h-32 resize-none border-none outline-none text-base placeholder-gray-400"
              />
                            <div className="flex items-center gap-4 mt-2">
                                <button className="text-gray-400 hover:text-gray-600 transition">
                                    <Smile className="w-6 h-6"/>
                                </button>
                                <span className="text-gray-400 text-sm ml-auto">0/2,200</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-6"></div>

                        {/* Location */}
                        <div className="mb-6">
                            <div
                                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition">
                                <span className="text-base">Добавить место</span>
                                <MapPin className="w-5 h-5 text-gray-400"/>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-6"></div>

                        {/* Accessibility */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <span className="text-base">Специальные возможности</span>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                Замещающий текст описывает ваши фото для людей с нарушениями зрения.
                            </p>
                        </div>


                    </div>
                </div>


            </main>
        </div>
    )
}