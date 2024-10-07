import mongoose, { Schema } from 'mongoose';

export interface IMessage {
    role: string; // "user" hoặc "assistant"
    content?: string;
    refusal?: boolean
    conversationId: mongoose.Types.ObjectId | string;
}

const MessageSchema: Schema<IMessage> = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user', 'assistant'],
        required: true,
    },
    content: {
        type: String,
    },
    refusal: {
        type: Boolean,
    },
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true,
    },

}, { timestamps: true });

const Message = mongoose.model<IMessage>('Message', MessageSchema);

export default Message;
