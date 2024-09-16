import { UserProps } from '@/interfaces'
import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    current: UserProps | null
}

const initialState: UserState = {
    current: null
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserProps>) => {
            state.current = action.payload
        },

    },
})

export const { setCurrentUser } = authSlice.actions

export const selectChatBoxes = (state: RootState) => state.chat.chatBoxes;
export const selectChat = (state: RootState) => state.chat.chatAi

export default authSlice.reducer