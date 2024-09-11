'use client'

import React, { useEffect, useRef, useState } from "react";
import { CHATS } from "@/dump";
import { useParams } from "next/navigation";
import Message from "./Message";
import { ChatBox } from "@/interfaces";

const ChatContent = () => {
    const [chat, setChat] = useState<ChatBox | null>(null)

    const messageEndRef = useRef<HTMLDivElement | null>(null);
    const { id: chatId } = useParams()

    useEffect(() => {
        const chat = CHATS.filter((item) => item.chatId === Number(chatId))
        setChat(chat[0] as ChatBox)
    }, [chatId])

    // Scroll xuống đáy sau khi tin nhắn được render
    useEffect(() => {
        if (chat?.messages) {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [chat?.messages]);

    return (
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
                            className={` ${index === chat.messages.length - 1
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
    );
};

export default ChatContent;
