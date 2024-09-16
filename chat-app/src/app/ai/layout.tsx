"use client";

import BottomBar from "@/components/BottomBar";
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/TopBar";
import { selectOpenSidebar } from "@/redux/features/sidebar/sidebarSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    const isOpenSidebar = useAppSelector(selectOpenSidebar);

    return (
        <div className="relative flex flex-row h-screen max-h-screen text-[#0d0d0d] overflow-hidden">
            {/* Sidebar điều hướng */}
            <aside className="flex sticky top-0 left-0">
                <Sidebar />
            </aside>

            {/* Phần chính của layout */}
            <section
                className={`relative flex w-full h-full max-h-screen flex-col sm:p-7 p-5 transition-all duration-500 ${
                    isOpenSidebar ? "ml-[260px]" : "ml-0"
                }`}
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
