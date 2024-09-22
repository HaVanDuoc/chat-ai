"use client";

import ContentConversation from "@/components/layout/conversation/ContentConversation";
import InputConversation from "@/components/layout/conversation/InputConversation";
import { clearConversation, selectLogged } from "@/redux/features";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function AiPage() {
    const isLogged = useAppSelector(selectLogged);
    const { slug: conversationId } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Clear data when redirect conversation others
        return () => {
            dispatch(clearConversation({ conversationId: "0" })); // Clear conversation default khi conversation này unmount
        };
    }, [dispatch]);

    return (
        <>
            <ContentConversation />

            {isLogged ? (
                <InputConversation
                    conversationId={conversationId ? (conversationId as string) : undefined}
                />
            ) : (
                // Chưa đăng nhập, thì khi send message lưu vào store - conversation default with id = "0"
                <InputConversation conversationId={"0"} />
            )}
        </>
    );
}
