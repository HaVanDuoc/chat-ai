"use client";

import Sidebar from "@/components/sidebar";
import TopBar from "@/components/TopBar";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import * as React from "react";

export interface IExploreLayoutProps {
    children: React.ReactNode;
}

const ExploreLayout = (props: IExploreLayoutProps) => {
    const isOpenSidebar = useAppSelector(
        (state: RootState) => state.sidebar.open,
    );

    return (
        <div className="relative flex flex-row h-screen max-h-screen text-[#0d0d0d] overflow-hidden">
            <aside className="flex sticky top-0 left-0">
                <Sidebar />
            </aside>

            <section
                className={`relative flex flex-1 flex-col transition-all duration-500`}
                style={{
                    marginLeft: isOpenSidebar ? "260px" : "0",
                    padding: "28px",
                }}
            >
                <TopBar />
                {props.children}
            </section>
        </div>
    );
};

export default ExploreLayout;
