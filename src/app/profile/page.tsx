import {getSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default async function ProfilePage()
{
    const session = await getSession();

    if (!session?.user) {
        redirect("/login");
    }
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-4">

                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {session.user.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">{session.user.name}</h1>
                        <p className="text-gray-600">{session.user.email}</p>
                        <p className="text-sm text-gray-500">ID: {session.user.id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}