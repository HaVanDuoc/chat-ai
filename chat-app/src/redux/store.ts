import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from '@/redux/features/sidebarSlice'
import userSlice from '@/redux/features/userSlice'
import conversationSlice from './features/conversationSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        conversation: conversationSlice,
        user: userSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch