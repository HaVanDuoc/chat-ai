"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Message from "./Message";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { GiMagicHat } from "react-icons/gi";
import { IoMdImages } from "react-icons/io";
import { selectChat } from "@/redux/features/chatbox/chatboxSlice";
import { ConversationProps } from "@/interfaces";

const ConversationSection = () => {
    const [conversation, setConversation] = useState<ConversationProps | null>(
        null,
    );

    const isLogged = false

    const { id: conversationId } = useParams();
    const chatRedux = useAppSelector(selectChat);
    console.log("chatRedux", chatRedux);

    const getChatBoxesRedux = useAppSelector(
        (state: RootState) => state.chat.chatBoxes,
    ); // get chatBoxes in redux
    const chatBox = getChatBoxesRedux.filter(
        (item) => item.conversationId === conversationId,
    )[0]; // chat with id
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isLogged) {
            setConversation(chatBox);
        } else {
            setConversation({
                conversationId: "default",
                participants: ["user", "assistant"],
                messages: chatRedux,
            });
        }
    }, [conversationId, chatBox, isLogged, chatRedux]);

    // Scroll xuống đáy sau khi tin nhắn được render
    useEffect(() => {
        if (conversation?.messages) {
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [conversation?.messages]);

    return isLogged ? (
        conversationId ? (
            <WrapMessage
                conversation={conversation}
                messageEndRef={messageEndRef}
            />
        ) : (
            <SuggestPrompt />
        )
    ) : conversation && conversation.messages.length > 0 ? (
        <WrapMessage
            conversation={conversation}
            messageEndRef={messageEndRef}
        />
    ) : (
        <SuggestPrompt />
    );
};

export default ConversationSection;

interface WrapMessageProps {
    conversation: ConversationProps | null;
    messageEndRef: React.RefObject<HTMLDivElement>;
}

const WrapMessage: React.FC<WrapMessageProps> = ({
    conversation,
    messageEndRef,
}) => {
    return (
        <div className=" flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
            {conversation &&
                conversation.messages.length > 0 &&
                conversation.messages.map((message, index) => {
                    return (
                        <div
                            ref={
                                index === conversation.messages.length - 1
                                    ? messageEndRef
                                    : null
                            }
                            className={` ${
                                index === conversation.messages.length - 1
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

const SuggestPrompt = () => {
    return (
        <div className="flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
            <div className="flex justify-center items-center h-[180px]">
                <GiMagicHat size={100} className="opacity-60" />
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-5 pb-8">
                {Array(4)
                    .fill(null)
                    .map((_, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer"
                        >
                            <IoMdImages
                                size={20}
                                color={"rgb(118, 208, 235)"}
                            />
                            <div>Create an illustration for a bakery</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
