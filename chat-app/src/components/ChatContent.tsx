'use client'

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Message from "./Message";
import { ChatBox } from "@/interfaces";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const ChatContent = () => {
    const [chat, setChat] = useState<ChatBox | null>(null)
    
    const { id: chatId } = useParams()
    console.log("chat", chat)

    const getChatBoxesRedux = useAppSelector((state: RootState) => state.chat.chatBoxes) // get chatBoxes in redux
    const chatBox = getChatBoxesRedux.filter((item) => item.chatId === Number(chatId))[0] // chat with id
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setChat(chatBox)
    }, [chatId, chatBox])

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
