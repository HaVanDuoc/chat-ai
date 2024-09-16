"use client";

import Sidebar from "@/components/sidebar";
import TopBar from "@/components/TopBar";
import { selectOpenSidebar } from "@/redux/features/sidebar/sidebarSlice";
import { useAppSelector } from "@/redux/hooks";
import * as React from "react";

export interface IExploreLayoutProps {
    children: React.ReactNode;
}

const ExploreLayout = ({ children }: IExploreLayoutProps) => {
    const isOpenSidebar = useAppSelector(selectOpenSidebar);

    return (
        <div className="relative flex flex-row h-screen max-h-screen text-[#0d0d0d] overflow-hidden">
            <aside className="flex sticky top-0 left-0">
                <Sidebar />
            </aside>

            <section
                className={`relative flex flex-1 flex-col transition-all duration-500 p-7 ${
                    isOpenSidebar ? "ml-[260px]" : "ml-0"
                }`}
            >
                <TopBar />
                {children}
            </section>
        </div>
    );
};

export default ExploreLayout;
