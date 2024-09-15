"use client";

import BottomBar from "@/components/BottomBar";
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/TopBar";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";

const ChatLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const isOpenSidebar = useAppSelector(
        (state: RootState) => state.sidebar.open,
    );

    return (
        <div className="relative flex flex-row h-screen max-h-screen text-[#0d0d0d] overflow-hidden">
            <aside className="flex sticky top-0 left-0">
                <Sidebar />
            </aside>

            <section
                className={`relative flex w-full h-full max-h-screen flex-col sm:p-7 p-5 transition-all duration-500`}
                style={{
                    marginLeft: isOpenSidebar ? "260px" : "0",
                    // padding: "28px",
                }}
            >
                <TopBar />

                <main className="flex flex-1 overflow-auto scroll-smooth">
                    {children}
                </main>

                <BottomBar />
            </section>
        </div>
    );
};

export default ChatLayout;
