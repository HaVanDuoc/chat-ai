import React from "react";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "@/components/ui/sidebar";
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
                    <ReduxProvider>
                        <div className="relative flex flex-row max-h-screen text-[#0d0d0d]">
                            <div className="flex sticky top-0 left-0">
                                <Sidebar />
                            </div>

                            {children}
                        </div>
                    </ReduxProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
