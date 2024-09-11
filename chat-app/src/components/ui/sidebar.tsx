"use client";

import React from "react";
import { FiEdit } from "react-icons/fi";
import ItemSidebar from "@/components/ItemSidebar";
import { GiMagicHat } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ButtonToggleSidebar from "@/components/ButtonToggleSidebar";
import ButtonNewChat from "@/components/ButtonNewChat";
import { CHATS } from "@/dump";

const Sidebar = () => {
    const isOpenSidebar = useAppSelector(
        (state: RootState) => state.sidebar.open,
    );

    return (
        <div
            className={`md:text-lg flex h-full opacity-0 md:opacity-100 fixed transition-all duration-300 ease-in-out z-20`}
            style={{
                width: isOpenSidebar ? "260px" : "0",
                opacity: isOpenSidebar ? "100" : 0,
            }}
        >
            <nav
                className={`flex flex-col gap-5 py-5 w-[260px] h-full max-h-screen bg-main `}
            >
                <section className="flex flex-row justify-between items-center px-3">
                    <ButtonToggleSidebar />
                    <ButtonNewChat />
                </section>

                <div className="flex flex-col gap-5 h-full w-full overflow-y-auto">
                    <section className="flex px-3">
                        <div className="flex flex-col w-full">
                            <ItemSidebar
                                startContent={
                                    <GiMagicHat
                                        size={20}
                                        className="opacity-70"
                                    />
                                }
                                content="Chat AI"
                                endContent={<FiEdit size={16} />}
                                link="/"
                            />
                            <ItemSidebar
                                startContent={
                                    <RxDashboard
                                        size={20}
                                        className="opacity-70"
                                    />
                                }
                                content="Explore"
                                link="/explore"
                            />
                        </div>
                    </section>

                    <section className="flex flex-col gap-3 px-3">
                        <div className="text-xs font-bold px-3">Today</div>
                        <div className="flex flex-col w-full">
                            {CHATS.map((chat) => (
                                <ItemSidebar
                                    key={chat.chatId}
                                    content={chat.messages[0].message}
                                    endContent={<FiMoreHorizontal size={20} />}
                                    link={`/c/${chat.chatId}`}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
