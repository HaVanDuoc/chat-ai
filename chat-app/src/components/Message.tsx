import { MessageProps } from "@/interfaces";
import React from "react";
import { GiMagicHat } from "react-icons/gi";

interface Props {
    message: MessageProps;
}

const Message: React.FC<Props> = ({ message }) => {
    return message.sender === "User" ? (
        // Message of user
        <div className="md:w-2/3 h-auto bg-secondary-50 rounded-xl px-5 py-3 ml-auto break-words whitespace-pre-wrap">
            {message.message}
        </div>
    ) : (
        // Message of AI
        <div className="w-full flex gap-8 items-start">
            <div className="flex justify-center items-center mt-1">
                <GiMagicHat size={24} className="opacity-80" />
            </div>
            <div className="flex flex-row gap-5 break-words whitespace-pre-wrap">
                {message.message}
            </div>
        </div>
    );
};

export default Message;
