"use client";

import ContentConversation from "@/components/layout/conversation/ContentConversation";
import { ConversationProps } from "@/interfaces";
import { selectConversations } from "@/redux/features/conversation/conversationSlice";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ConversationPage = () => {
    const [messages, setMessages] = useState<ConversationProps["messages"]>([]);
    const conversations = useAppSelector(selectConversations);
    const { slug: conversationId } = useParams();

    useEffect(() => {
        setMessages(
            conversations.filter((item) => item.conversationId === conversationId)[0].messages,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversationId]);

    return (
        <>
            <ContentConversation messages={messages} />
        </>
    );
};

export default ConversationPage;
