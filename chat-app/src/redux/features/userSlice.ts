import { IUser } from '@/models/user'
import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    current: IUser | null
}

const initialState: UserState = {
    current: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser>) => {
            state.current = action.payload
        },

    },
})

export const { setCurrentUser } = userSlice.actions

export const selectLogged = (state: RootState): boolean => {
    return !!state.user.current
}
export const selectCurrentUser = (state: RootState) => state.user.current

export default userSlice.reducer