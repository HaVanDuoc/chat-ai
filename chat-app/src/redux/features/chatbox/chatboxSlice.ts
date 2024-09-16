import { ConversationProps, MessageProps } from '@/interfaces'
import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChatState {
    chatBoxes: ConversationProps[];
    chatAi: MessageProps[] // Use save message when no logged
}

const initialState: ChatState = {
    chatBoxes: [],
    chatAi: []
}
export const chatBoxSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        setChatBox: (state, action: PayloadAction<ConversationProps[]>) => {
            state.chatBoxes = action.payload
        },
        addChatBox: (state, action: PayloadAction<ConversationProps>) => {
            state.chatBoxes.push(action.payload)
        },
        addMessage: (
            state,
            action: PayloadAction<{ conversationId: string; message: MessageProps }>
        ) => {
            const { conversationId, message } = action.payload;
            const index = state.chatBoxes.findIndex(box => box.conversationId === conversationId);

            if (index >= 0) {
                state.chatBoxes[index].messages?.push(message)
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

export const selectChatBoxes = (state: RootState) => state.chat.chatBoxes;
export const selectChat = (state: RootState) => state.chat.chatAi

export default chatBoxSlice.reducer