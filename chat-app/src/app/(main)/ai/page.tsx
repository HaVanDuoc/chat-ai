"use client";

import ContentConversation from "@/components/layout/conversation/ContentConversation";
import { ConversationProps } from "@/interfaces";
import {
    clearConversation,
    selectConversations,
} from "@/redux/features/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

export default function AiPage() {
    const [messages, setMessages] = useState<ConversationProps["messages"]>([]);
    const conversations = useAppSelector(selectConversations);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setMessages(conversations[0].messages);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversations[0]]);

    useEffect(() => {
        // Clear data when redirect conversation others
        return () => {
            dispatch(clearConversation({ conversationId: "0" })); // Clear conversation default khi conversation này unmount
        };
    }, [dispatch]);

    return (
        <>
            <ContentConversation messages={messages} />
        </>
    );
}
