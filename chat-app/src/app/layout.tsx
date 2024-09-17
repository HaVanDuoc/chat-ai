import React from "react";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <ReduxProvider>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        {children}
                    </ReduxProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
