"use client";

import api from "@/config/api";
import { MessageProps } from "@/models";
import {
    addMessage,
    selectConversations,
} from "@/redux/features/conversation/conversationSlice";
import { selectLogged } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";

const InputConversation = () => {
    const [value, setValue] = useState<string>("");
    const conversation = useAppSelector(selectConversations)[0];
    // const chatai = useAppSelector(selectChat); // chat with ai when no logged
    // const { id: conversationId } = useParams();
    const isLogged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();

    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
        e && e.preventDefault(); // Prevent the default form submission behavior

        if (value && value !== "") {
            console.log("Message:", value);

            const newMessage: MessageProps = {
                role: "user",
                content: value,
            };

            if (!isLogged) {
                // Chưa đăng nhập conversation sẽ được lưu vào store
                try {
                    dispatch(addMessage({ conversationId: "0", message: newMessage })); // message newest of user

                    // Gửi request tới API để lưu cuộc hội thoại vào database
                    const response = await api.post("/ai/completion", {
                        messages: [...conversation.messages, newMessage],
                    });

                    console.log("API Response:", response.data);

                    if (response && !response.data.refusal) {
                        // Cập nhật Redux store với tin nhắn phản hồi từ API
                        dispatch(
                            addMessage({
                                conversationId: "0",
                                message: response.data.reply.message,
                            }),
                        ); // message newest of user
                    } else {
                        console.error("API is rejected");
                    }
                } catch (error) {
                    console.error("API error:", error);
                }
            }
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
                        setValue(""); // Clear the input field after submission
                    }
                }}
                startContent={
                    <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                        <MdAttachFile size={22} />
                    </div>
                }
                endContent={
                    <div
                        className="w-10 h-10 flex justify-center items-center cursor-pointer opacity-70"
                        onClick={() => {
                            if (value && value !== "") {
                                handleSubmit(); // Call handleSubmit when Enter is pressed
                                setValue(""); // Clear the input field after submission
                            }
                        }}
                    >
                        <FaLocationArrow size={22} />
                    </div>
                }
            />
        </form>
    );
};

export default InputConversation;
