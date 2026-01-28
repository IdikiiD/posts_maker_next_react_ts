"use client"

import Link from "next/link";
import {ArrowLeft, PlusSquare} from "lucide-react";
import {redirect, usePathname} from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import {getAuthSession} from "@/lib/auth";




export const Header = async () => {
    const pathname = usePathname();
    const isCreating = pathname === "/create";


    return (

            isCreating ? (
                <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
                    <div className="max-w-[935px] mx-auto px-4 py-3 flex items-center justify-between">
                        <Link
                              href="/" className="hover:opacity-70 transition">
                            <ArrowLeft className="w-6 h-6"/>
                        </Link>
                        <h1 className="text-xl font-semibold">Создать публикацию</h1>
                        <button className="text-blue-500 font-semibold hover:text-blue-700 transition">
                            Поделиться
                        </button>
                    </div>
                </header>
                ) : (
                <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
                    <div className="max-w-[935px] mx-auto px-4 py-3 flex items-center justify-between">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                            InstaClone
                        </h1>

                        <Link

                            href="/create"
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
                        >
                            <PlusSquare className="w-6 h-6" />
                            <span className="font-medium">Создать</span>
                        </Link>
                        <LogoutButton />



                    </div>
                </header>
            )


    )
}
