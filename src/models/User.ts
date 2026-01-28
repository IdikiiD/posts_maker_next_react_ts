import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Пожалуйста, укажите имя'],
    },
    email: {
        type: String,
        required: [true, 'Пожалуйста, укажите email'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Пожалуйста, укажите пароль'],
        minlength: 6,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;