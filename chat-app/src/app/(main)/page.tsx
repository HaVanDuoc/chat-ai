import ContentConversation from "@/components/layout/conversation/ContentConversation";
import HeaderConversation from "@/components/layout/conversation/HeaderConversation";
import InputConversation from "@/components/layout/conversation/InputConversation";
import React from "react";

const PageHome = () => {
    return (
        <>
            <HeaderConversation />
            <ContentConversation/>
            <InputConversation />
        </>
    );
};

export default PageHome;
