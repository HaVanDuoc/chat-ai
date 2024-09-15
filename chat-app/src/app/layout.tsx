import React from "react";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxProvider } from "@/redux/provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <ReduxProvider>{children}</ReduxProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
