import { ConversationProps, MessageProps } from '@/interfaces'
import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChatState {
    conversations: ConversationProps[];
    chatAi: MessageProps[] // Use save message when no logged
}

const initialState: ChatState = {
    conversations: [],
    chatAi: []
}
export const chatBoxSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        setChatBox: (state, action: PayloadAction<ConversationProps[]>) => {
            state.conversations = action.payload
        },
        addChatBox: (state, action: PayloadAction<ConversationProps>) => {
            state.conversations.push(action.payload)
        },
        addMessage: (
            state,
            action: PayloadAction<{ conversationId: string; message: MessageProps }>
        ) => {
            const { conversationId, message } = action.payload;
            const index = state.conversations.findIndex(box => box.conversationId === conversationId);

            if (index >= 0) {
                state.conversations[index].messages?.push(message)
            }
        },
        addChat: (
            state,
            action: PayloadAction<{ message: MessageProps }>
        ) => {
            state.chatAi = [...state.chatAi, action.payload.message]
        },
    },
})

export const { setChatBox, addMessage, addChatBox, addChat } = chatBoxSlice.actions

export const selectConversations = (state: RootState) => state.chat.conversations;
export const selectChat = (state: RootState) => state.chat.chatAi

export default chatBoxSlice.reducer