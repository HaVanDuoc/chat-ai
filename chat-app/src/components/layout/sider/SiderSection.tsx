"use client";

import React, { useEffect } from "react";
import { FiEdit, FiMoreHorizontal } from "react-icons/fi";
import { GiMagicHat } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { LuPencil, LuShare } from "react-icons/lu";
import { RiArchive2Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { selectConversations, setChatBox } from "@/redux/features/chatbox/chatboxSlice";
import { pathPage } from "@/config";
import ButtonToggleSidebar from "@/components/ButtonToggleSidebar";
import ButtonNewChat from "@/components/ButtonNewChat";
import ItemSidebar from "@/components/ItemSidebar";
import { selectOpenSidebar } from "@/redux/features/sidebar/sidebarSlice";
import { CHATS } from "@/data";

const SiderSection = () => {
    const chats = useAppSelector(selectConversations); // Get Box chats in redux
    const isOpenSidebar = useAppSelector(selectOpenSidebar); // get status open of sidebar
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setChatBox(CHATS));
    }, [dispatch]);

    return (
        <div
            className={`md:text-lg flex h-full opacity-0 md:opacity-100 fixed transition-all duration-300 ease-in-out z-20`}
            style={{
                width: isOpenSidebar ? "260px" : "0",
                opacity: isOpenSidebar ? "100" : 0,
            }}
        >
            <nav className={`flex flex-col gap-5 py-5 w-[260px] h-full max-h-screen bg-main `}>
                <section className="flex flex-row justify-between items-center px-3">
                    <ButtonToggleSidebar />
                    <ButtonNewChat />
                </section>

                <div className="flex flex-col gap-5 h-full w-full overflow-y-auto">
                    <section className="flex px-3">
                        <div className="flex flex-col w-full">
                            <ItemSidebar
                                startContent={<GiMagicHat size={20} className="opacity-70" />}
                                content="Chat AI"
                                endContent={<FiEdit size={16} />}
                                link={pathPage.ai}
                            />
                            <ItemSidebar
                                startContent={<RxDashboard size={20} className="opacity-70" />}
                                content="Explore"
                                link={pathPage.explore}
                            />
                        </div>
                    </section>

                    <section className="flex flex-col gap-3 px-3">
                        <div className="text-xs font-bold px-3">Today</div>
                        <div className="flex flex-col w-full">
                            {chats.map((chat, index) => (
                                <ItemSidebar
                                    key={index}
                                    content={chat.messages[0].content}
                                    endContent={
                                        <Dropdown placement="right-start">
                                            <DropdownTrigger>
                                                <Button
                                                    variant="light"
                                                    isIconOnly
                                                    aria-label={`more-${chat.conversationId}`}
                                                >
                                                    <FiMoreHorizontal size={20} />
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label="Static Actions">
                                                <DropdownItem
                                                    startContent={<LuShare />}
                                                    key="Share"
                                                >
                                                    Share
                                                </DropdownItem>
                                                <DropdownItem
                                                    startContent={<LuPencil />}
                                                    key="Rename"
                                                >
                                                    Rename
                                                </DropdownItem>
                                                <DropdownItem
                                                    startContent={<RiArchive2Line />}
                                                    key="Archive"
                                                >
                                                    Archive
                                                </DropdownItem>
                                                <DropdownItem
                                                    startContent={<AiOutlineDelete />}
                                                    key="Delete"
                                                    className="text-danger"
                                                    color="danger"
                                                >
                                                    Delete
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    }
                                    link={`${pathPage.ai}/${chat.conversationId}`}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </nav>
        </div>
    );
};

export default SiderSection;
