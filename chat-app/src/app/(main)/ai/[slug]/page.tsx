"use client";

import ContentConversation from "@/components/layout/conversation/ContentConversation";
import InputConversation from "@/components/layout/conversation/InputConversation";
import { ConversationProps } from "@/models";
import { useParams } from "next/navigation";
import React from "react";

const ConversationPage = () => {
    const { slug: conversationId } = useParams();

    return (
        <>
            <ContentConversation />
            <InputConversation
                conversationId={conversationId as ConversationProps["conversationId"]}
            />
        </>
    );
};

export default ConversationPage;
