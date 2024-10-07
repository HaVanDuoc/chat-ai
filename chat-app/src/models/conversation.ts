import mongoose, { Schema } from 'mongoose';

export interface IConversation {
    messagesIds: mongoose.Types.ObjectId[];
    lastMessagesAt: Date;
}

const ConversationSchema: Schema<IConversation> = new Schema({
    messagesIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }],
    lastMessagesAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Conversation = mongoose.model<IConversation>('Conversation', ConversationSchema);

export default Conversation;
