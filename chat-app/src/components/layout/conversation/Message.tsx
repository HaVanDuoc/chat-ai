import { MessageProps } from "@/interfaces";
import { marked } from "marked";
import React from "react";
import { GiMagicHat } from "react-icons/gi";

interface IMessage {
    message: MessageProps;
}

const Message: React.FC<IMessage> = ({ message }) => {
    const markdown = marked(message.content);

    return message.role === "user" ? (
        // Message of user
        <div className="md:w-fit max-w-2/3 h-auto bg-secondary-50 rounded-xl px-5 py-3 ml-auto ">
            <article
                className="prose text-justify"
                dangerouslySetInnerHTML={{ __html: markdown }}
            />
        </div>
    ) : (
        // Message of AI
        <div className="w-full flex gap-8 items-start">
            <div className="flex justify-center items-center mt-1">
                <GiMagicHat size={24} className="opacity-80" />
            </div>
            <div className="flex flex-row gap-5 w-fit ">
                <article
                    className="prose text-justify"
                    dangerouslySetInnerHTML={{ __html: markdown }}
                />
            </div>
        </div>
    );
};

export default Message;
