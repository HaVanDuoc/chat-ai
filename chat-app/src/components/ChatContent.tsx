import React, { useEffect, useRef } from "react";
import Message, { MessageProps } from "./Message";


const ChatContent = () => {
 
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    // Scroll xuống đáy
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className=" flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
            {fake_messages &&
                fake_messages.length > 0 &&
                fake_messages.map((message, index) => {
                    return (
                        <div
                        ref={
                            index === fake_messages.length - 1
                                ? messageEndRef
                                : null
                        }
                            className={` ${
                                index === fake_messages.length - 1
                                    ? "flex pb-10"
                                    : ""
                            }`}
                            key={index}
                        >
                            <Message
                                type={message.type}
                                content={message.content}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default ChatContent;

const fake_messages: MessageProps[] = [
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
    {
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur quam dolor iure suscipit deleniti, illum similique quas eum officiis, rerum impedit eius aut? Doloribus cumque neque necessitatibus laboriosam. Quia?",
        type: "send",
    },
    {
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto fuga mollitia, similique voluptatibus molestias expedita aliquam id, maiores error magni est! Harum corrupti necessitatibus reiciendis, dolorum debitis saepe a.",
        type: "receive",
    },
];

