import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();


        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Все поля обязательны" },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { message: "Пароль должен содержать минимум 6 символов" },
                { status: 400 }
            );
        }

        await connectDB();

        // Проверка существующего пользователя
        const existingUser = await User.findOne({ email: email.toLowerCase() });

        if (existingUser) {
            return NextResponse.json(
                { message: "Пользователь с таким email уже существует" },
                { status: 409 }
            );
        }

        // Хеширование пароля
        const hashedPassword = await bcrypt.hash(password, 12);

        // Создание пользователя
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        return NextResponse.json(
            {
                message: "Пользователь успешно зарегистрирован",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Ошибка регистрации:", error);
        return NextResponse.json(
            { message: "Ошибка сервера", error: error.message },
            { status: 500 }
        );
    }
}