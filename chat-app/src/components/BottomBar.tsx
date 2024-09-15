"use client";

import { pathPage } from "@/config";
import { ChatBox, MessageProps } from "@/interfaces";
import { addChatBox, addMessage } from "@/redux/features/chatbox/chatboxSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Textarea, Tooltip } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";

const BottomBar = () => {
    const [value, setValue] = useState<string>("");
    const { id: chatId } = useParams();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const chatBoxes = useAppSelector(
        (state: RootState) => state.chat.chatBoxes,
    );

    const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e && e.preventDefault(); // Prevent the default form submission behavior
        if (!value || value === "") return;
        console.log("Message:", value);

        if (chatId) {
            const messageData: MessageProps = {
                id: 11,
                sender: "User",
                message: value,
                timestamp: new Date().toISOString(),
                seen: false,
            };

            dispatch(
                addMessage({ chatId: Number(chatId), message: messageData }),
            );

            setValue(""); // Clear the input field after submission
        } else {
            // Case create new chat
            const chat: ChatBox = {
                chatId: chatBoxes.length + 2,
                participants: ["User", "AI Assistant"],
                messages: [
                    {
                        id: 1,
                        sender: "User",
                        message: value,
                        timestamp: new Date().toISOString(),
                        seen: false,
                    },
                ],
            };

            dispatch(addChatBox(chat));

            router.push(`/${pathPage.ai}/${chatBoxes.length + 2}`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sticky bottom-0 left-0 w-full max-w-screen-md mx-auto bg-white z-10"
        >
            <Textarea
                type="submit"
                minRows={1}
                maxRows={5}
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                size="lg"
                placeholder={`Message Chat AI`}
                classNames={{
                    innerWrapper: "items-center",
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(); // Call handleSubmit when Enter is pressed
                    }
                }}
                startContent={
                    <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                        <Tooltip showArrow content="Attach file">
                            <MdAttachFile size={22} />
                        </Tooltip>
                    </div>
                }
                endContent={
                    <div
                        className="w-10 h-10 flex justify-center items-center cursor-pointer opacity-70"
                        onClick={() => {
                            if (value && value !== "") {
                                handleSubmit(); // Call handleSubmit when Enter is pressed
                            }
                        }}
                    >
                        <Tooltip showArrow content="Send">
                            <FaLocationArrow size={22} />
                        </Tooltip>
                    </div>
                }
            />
        </form>
    );
};

export default BottomBar;
