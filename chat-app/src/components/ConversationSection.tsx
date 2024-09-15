"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Message from "./Message";
import { ChatBox } from "@/interfaces";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { GiMagicHat } from "react-icons/gi";
import { IoMdImages } from "react-icons/io";

const ConversationSection = () => {
    const [chat, setChat] = useState<ChatBox | null>(null);

    const { id: conversationId } = useParams();
    console.log("chat", chat);

    const getChatBoxesRedux = useAppSelector(
        (state: RootState) => state.chat.chatBoxes,
    ); // get chatBoxes in redux
    const chatBox = getChatBoxesRedux.filter(
        (item) => item.chatId === Number(conversationId),
    )[0]; // chat with id
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setChat(chatBox);
    }, [conversationId, chatBox]);

    // Scroll xuống đáy sau khi tin nhắn được render
    useEffect(() => {
        if (chat?.messages) {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [chat?.messages]);

    return conversationId ? (
        <div className=" flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
            {chat &&
                chat.messages.length > 0 &&
                chat.messages.map((message, index) => {
                    return (
                        <div
                            ref={
                                index === chat.messages.length - 1
                                    ? messageEndRef
                                    : null
                            }
                            className={` ${
                                index === chat.messages.length - 1
                                    ? "flex pb-10"
                                    : ""
                            }`}
                            key={index}
                        >
                            <Message message={message} />
                        </div>
                    );
                })}
        </div>
    ) : (
        <div className=" flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
            <div className="flex justify-center items-center h-[180px]">
                <GiMagicHat size={100} className="opacity-60" />
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-5 pb-8">
                <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                    <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                    <div>Create an illustration for a bakery</div>
                </div>
                <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                    <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                    <div>Create an illustration for a bakery</div>
                </div>
                <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                    <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                    <div>Create an illustration for a bakery</div>
                </div>
                <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                    <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                    <div>Create an illustration for a bakery</div>
                </div>
            </div>
        </div>
    );
};

export default ConversationSection;
