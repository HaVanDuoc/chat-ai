import HeaderConversation from "@/components/layout/conversation/HeaderConversation";
import React from "react";

const LayoutConversation = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderConversation />
            {children}
        </>
    );
};

export default LayoutConversation;
