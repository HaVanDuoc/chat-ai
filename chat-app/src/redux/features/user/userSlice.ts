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
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserProps>) => {
            state.current = action.payload
        },

    },
})

export const { setCurrentUser } = authSlice.actions

export const selectLogged = (state: RootState): boolean => {
    return !!state.user.current
}
export const selectCurrentUser = (state: RootState) => state.user.current

export default authSlice.reducer