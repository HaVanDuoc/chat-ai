import HeaderConversation from "@/components/layout/conversation/HeaderConversation";
import InputConversation from "@/components/layout/conversation/InputConversation";
import React from "react"

const LayoutConversation = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderConversation />
            {children}
            <InputConversation />
        </>
    );
};

export default LayoutConversation;
