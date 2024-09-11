import { RootState } from '@/redux/store'
import { createSlice } from '@reduxjs/toolkit'

interface SidebarState {
    open: boolean
}

const initialState: SidebarState = {
    open: true,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        onOpen: (state) => {
            state.open = true
        },
        onClose: (state) => {
            state.open = false
        },
        onToggle: (state) => {
            state.open = !state.open
        }
    },
})

export const { onOpen, onClose, onToggle } = sidebarSlice.actions

export const selectOpenSidebar = (state: RootState) => state.sidebar.open

export default sidebarSlice.reducer