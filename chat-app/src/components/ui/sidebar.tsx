"use client";

import React from "react";
import { FiEdit } from "react-icons/fi";
import ItemSidebar from "@/components/ItemSidebar";
import { MdMoreHoriz } from "react-icons/md";
import { GiMagicHat } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ButtonToggleSidebar from "@/components/ButtonToggleSidebar";
import ButtonNewChat from "@/components/ButtonNewChat";

const Sidebar = () => {
    const isOpenSidebar = useAppSelector(
        (state: RootState) => state.sidebar.open,
    );

    return (
        <div
            className={`flex  h-full opacity-0 md:opacity-100 fixed transition-all duration-300 ease-in-out z-20`}
            style={{
                width: isOpenSidebar ? "260px" : "0",
                opacity: isOpenSidebar ? "100" : 0,
            }}
        >
            <nav
                className={`flex flex-col gap-5 py-5 w-[260px] h-full max-h-screen bg-main `}
            >
                <section className="flex flex-row justify-between items-center px-5">
                    <ButtonToggleSidebar />
                    <ButtonNewChat />
                </section>

                <div className="flex flex-col gap-5 h-full w-full overflow-y-auto">
                    <section className="flex px-3">
                        <div className="flex flex-col w-full">
                            <ItemSidebar
                                startContent={<GiMagicHat size={20} />}
                                content="Chat AI"
                                endContent={<FiEdit size={16} />}
                            />
                            <ItemSidebar
                                startContent={<RxDashboard size={20} />}
                                content="Explore"
                            />
                        </div>
                    </section>

                    <section className="flex flex-col gap-3 px-3">
                        <div className="text-xs font-bold px-3">Today</div>
                        <div className="flex flex-col w-full">
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                            <ItemSidebar
                                content="Fixing LocalePrefix Error"
                                endContent={<MdMoreHoriz size={20} />}
                            />
                        </div>
                    </section>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
