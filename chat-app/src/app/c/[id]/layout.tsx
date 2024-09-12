'use client'

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { RootState } from "@/redux/store";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

const ChatLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const isOpenSidebar = useAppSelector(
        (state: RootState) => state.sidebar.open,
    );

    return (
        <div
            className={`relative flex flex-1 flex-col p-7 transition-all duration-500 md: ${isOpenSidebar ? "ml-[260px]" : ""}`}
        >
            <TopBar />

            <main className="flex flex-1 overflow-auto scroll-smooth">
                {children}
            </main>

            <BottomBar />
        </div>
    );
};

export default ChatLayout;
