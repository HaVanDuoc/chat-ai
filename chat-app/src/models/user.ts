// /models/User.ts

import mongoose from 'mongoose';

export interface IUser {
    name?: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    conversationId?: mongoose.Types.ObjectId[];
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    emailVerified: {
        type: Date,
    },
    image: {
        type: String,
    },
    conversationId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
    }],
}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);

export default User
