import { MainLayout } from "@/layouts/MainLayout";
import React from "react";

const ChatLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <MainLayout>{children}</MainLayout>;
};

export default ChatLayout;
