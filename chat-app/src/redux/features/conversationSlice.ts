import { ConversationProps, MessageProps } from '@/models';
import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ConversationState {
    conversations: ConversationProps[];
}

const initialState: ConversationState = {
    conversations: [
        {
            conversationId: "0",
            participants: [],
            messages: [],
        }
    ],
}
export const conversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        // Initial Conversations with fetch data
        setConversations: (state, action: PayloadAction<ConversationProps[]>) => {
            action.payload.map((conversation) => state.conversations.push(conversation))
        },
        // Add new conversation
        addConversation: (state, action: PayloadAction<ConversationProps>) => {
            state.conversations.push(action.payload)
        },
        addMessage: (
            state,
            action: PayloadAction<{ conversationId: string; message: MessageProps }>
        ) => {
            const { conversationId, message } = action.payload;
            const index = state.conversations.findIndex(box => box.conversationId === conversationId)

            if (index >= 0) {
                state.conversations[index].messages?.push(message)
            }
        },
        // Clear a conversation
        clearConversation: (state, action: PayloadAction<{ conversationId: ConversationProps['conversationId'] }>) => {
            state.conversations.forEach((conversation) => {
                if (conversation.conversationId === action.payload.conversationId) {
                    conversation.messages = []; // Clear the messages array
                }
            })
        },
    },
})

export const { setConversations, addConversation, clearConversation, addMessage } = conversationSlice.actions

export const selectConversations = (state: RootState) => state.conversation.conversations;
export const selectConversationById = (state: RootState, conversationId: string) =>
    state.conversation.conversations.find(conversation => conversation.conversationId === conversationId);


export default conversationSlice.reducer