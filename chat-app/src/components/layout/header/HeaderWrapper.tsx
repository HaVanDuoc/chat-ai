"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { onClose, onOpen, selectOpenSidebar } from "@/redux/features/sidebarSlice";
import { selectLogged } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import ButtonToggleSidebar from "@/components/layout/sider/ButtonToggleSidebar";
import OptionAccount from "@/components/layout/header/OptionAccount";
import appConfig from "@/config/appConfig";
import ButtonNewChat from "@/components/common/ButtonNewChat";

const HeaderWrapper = ({ children }: { children?: React.ReactNode }) => {
    const [widthScreen, setWidthScreen] = useState<number | null>(null);
    const isOpenSidebar = useAppSelector(selectOpenSidebar);
    const isLogged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();
    const router = useRouter();

    // Check màn hình khi dưới 'md' và đóng sidebar
    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            setWidthScreen(currentWidth);

            // Nếu người dùng không thực hiện toggle bằng tay, tự động thay đổi trạng thái
            if (window.innerWidth < 768) {
                dispatch(onClose()); // Đóng sidebar nếu nó đang mở
            } else if (window.innerWidth >= 768) {
                dispatch(onOpen()); // Mở sidebar nếu nó đang đóng
            }
        };

        // Lắng nghe sự kiện resize
        window.addEventListener("resize", handleResize);

        // Gọi ngay lập tức để kiểm tra khi component mount
        handleResize();

        // Cleanup event listener khi component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch, widthScreen]);

    return (
        <header className="flex flex-row justify-between items-center gap-5 w-full pb-5 sm:pb-7 z-10 sticky top-0 left-0 bg-white">
            <div className="flex flex-row gap-5 items-center justify-between md:justify-normal w-full md:w-auto">
                {!isOpenSidebar && isLogged && (
                    <div className="order-1 md:order-none">
                        <ButtonToggleSidebar />
                    </div>
                )}
                {!isOpenSidebar && isLogged && (
                    <div className="order-3 md:order-none">
                        <ButtonNewChat />
                    </div>
                )}
                <div className="text-xl text-secondary font-bold order-2 md:order-none">
                    Chat AI
                </div>
            </div>

            {children}

            {isLogged ? (
                widthScreen && widthScreen > 768 && <OptionAccount />
            ) : (
                <div className="flex flex-row gap-5 items-center">
                    <Button
                        size="sm"
                        className="rounded-full bg-black text-white"
                        onClick={() => router.push(appConfig.path.signin)}
                    >
                        Login
                    </Button>
                    <Button
                        size="sm"
                        className="rounded-full bg-black text-white"
                        onClick={() => router.push(appConfig.path.signup)}
                    >
                        Sign Up
                    </Button>
                </div>
            )}
        </header>
    );
};

export default HeaderWrapper;
