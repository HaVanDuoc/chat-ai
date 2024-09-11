import { ChatBox, MessageProps } from '@/interfaces'
import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChatState {
    chatBoxes: ChatBox[];
}

const initialState: ChatState = {
    chatBoxes: [],
}
export const chatBoxSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChatBox: (state, action: PayloadAction<ChatBox[]>) => {
            state.chatBoxes = action.payload
        },
        addChatBox: (state, action: PayloadAction<ChatBox>) => {
            state.chatBoxes.push(action.payload)
        },
        addMessage: (
            state,
            action: PayloadAction<{ chatId: number; message: MessageProps }>
        ) => {
            const { chatId, message } = action.payload
            const chatBox = state.chatBoxes.find(box => box.chatId === chatId)
            if (chatBox) {
                chatBox.messages.push(message)
            }
        },
    },
})

export const { setChatBox } = chatBoxSlice.actions

export const selectChatBoxes = (state: RootState) => state.chat.chatBoxes;

export default chatBoxSlice.reducer