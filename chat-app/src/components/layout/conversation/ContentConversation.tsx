"use client";

import Message from "@/components/layout/conversation/Message";
import { ConversationProps } from "@/interfaces";
import React, { useEffect } from "react";
import SuggestConversation from "./SuggestConversation";

const ContentConversation = ({ messages }: { messages: ConversationProps["messages"] }) => {
    const messageEndRef = React.useRef<HTMLDivElement | null>(null);

    // Scroll xuống đáy sau khi tin nhắn được render
    useEffect(() => {
        if (messages) {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return messages && messages.length > 0 ? (
        <main className="flex flex-1 overflow-auto scroll-smooth">
            <div className="flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
                {messages.map((message, index) => (
                    <div
                        ref={index === messages.length - 1 ? messageEndRef : null}
                        className={` ${index === messages.length - 1 ? "flex pb-10" : ""}`}
                        key={index}
                    >
                        <Message message={message} />
                    </div>
                ))}
            </div>
        </main>
    ) : (
        <SuggestConversation />
    );
};

export default ContentConversation;
