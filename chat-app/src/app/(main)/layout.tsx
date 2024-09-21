"use client";

import SiderSection from "@/components/layout/sider/SiderSection";
import { selectOpenSidebar } from "@/redux/features/sidebar/sidebarSlice";
import { selectLogged } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import * as React from "react";

const SiderLayout = ({ children }: { children: React.ReactNode }) => {
    const isOpenSidebar = useAppSelector(selectOpenSidebar);
    const isLogged = useAppSelector(selectLogged)

    return (
        <div className="relative flex flex-row h-screen max-h-screen text-[#0d0d0d] overflow-hidden">
            {isLogged && (
                <aside className="flex sticky top-0 left-0">
                <SiderSection />
            </aside>
            )}

            <section
                className={`relative flex flex-1 flex-col transition-all duration-500 p-7 ${
                   isLogged && isOpenSidebar ? "ml-[260px]" : "ml-0"
                }`}
            >
                {children}
            </section>
        </div>
    );
};

export default SiderLayout;
