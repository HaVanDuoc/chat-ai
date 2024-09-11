import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from '@/redux/features/sidebar/sidebarSlice'
import chatBoxSlice from '@/redux/features/chatbox/chatboxSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        chat: chatBoxSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch