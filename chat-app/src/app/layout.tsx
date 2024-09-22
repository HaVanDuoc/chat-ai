import React from "react";
import "@/app/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionWrapper from "@/components/auth/SessionWrapper";
import SessionContainer from "@/components/auth/SessionContainer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <SessionWrapper>
                    <NextUIProvider>
                        <ReduxProvider>
                            <SessionContainer />
                            <ToastContainer />
                            {children}
                        </ReduxProvider>
                    </NextUIProvider>
                </SessionWrapper>
            </body>
        </html>
    );
}
