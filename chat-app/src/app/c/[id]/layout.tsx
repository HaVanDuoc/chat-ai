'use client'

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { onClose, onOpen } from "@/redux/features/sidebar/sidebarSlice";
import ButtonToggleSidebar from "@/components/ButtonToggleSidebar";
import { Input, Tooltip, Link } from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";
import { GiMagicHat } from "react-icons/gi";
import UserAccount from "@/components/UserAccount";
import { MdAttachFile } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const ChatLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [widthScreen, setWidthScreen] = useState<number | null>(null);

    const dispatch = useAppDispatch();
    const isOpenSidebar = useAppSelector(
        (state: RootState) => state.sidebar.open,
    );

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
        <div
            className={`relative flex flex-1 flex-col p-7 transition-all duration-500 md: ${isOpenSidebar ? "ml-[260px]" : ""
                }`}
        >
            <header className="flex flex-row justify-between items-center gap-5 w-full pb-5 sm:pb-7 z-10 sticky top-0 left-0 bg-white">
                <div className="flex flex-row gap-5 items-center justify-between md:justify-normal w-full md:w-auto">
                    {!isOpenSidebar && (
                        <ButtonToggleSidebar className="md:order-1" />
                    )}
                    <div className="text-xl text-secondary font-bold md:order-3">
                        Chat AI
                    </div>
                    {!isOpenSidebar && (
                        <Tooltip showArrow={true} content="New Chat">
                            <Link href={"/"} className="flex justify-center items-center p-[10px] rounded-lg hover:bg-hover">
                                <FiEdit
                                    size={20}
                                    className={`text-secondary cursor-pointer md:order-2`}
                                />
                            </Link>
                        </Tooltip>
                    )}
                </div>

                {widthScreen && widthScreen > 768 && (
                    <GiMagicHat size={30} className="text-secondary" />
                )}

                {widthScreen && widthScreen > 768 && <UserAccount />}
            </header>

            <main className="flex flex-1 overflow-auto scroll-smooth">
                {children}
            </main>

            <section className="sticky bottom-0 left-0 w-full max-w-screen-md mx-auto bg-white z-10">
                <Input
                    size="lg"
                    placeholder={`Message Chat AI`}
                    startContent={
                        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                            <Tooltip showArrow content="Attach file">
                                <MdAttachFile size={22} />
                            </Tooltip>
                        </div>
                    }
                    endContent={
                        <div className="w-10 h-10 flex justify-center items-center cursor-pointer opacity-70">
                            <Tooltip showArrow content="Send">
                                <FaLocationArrow size={22} />
                            </Tooltip>
                        </div>
                    }
                />
            </section>
        </div>
    );
};

export default ChatLayout;
