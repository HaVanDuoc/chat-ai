"use client";

import { GiMagicHat } from "react-icons/gi";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onClose, onOpen } from "@/redux/features/sidebar/sidebarSlice";
import { useEffect, useState } from "react";
import { IoMdImages } from "react-icons/io";
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";

export default function HomeSection() {
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
            <TopBar />

            <main className="flex flex-1  overflow-auto scroll-smooth">
                <div className=" flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
                    <div className="flex justify-center items-center h-[180px]"><GiMagicHat size={100} className="opacity-60" /></div>

                    <div className="grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-5 pb-8">
                        <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                            <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                            <div>Create an illustration for a bakery</div>
                        </div>
                        <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                            <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                            <div>Create an illustration for a bakery</div>
                        </div>
                        <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                            <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                            <div>Create an illustration for a bakery</div>
                        </div>
                        <div className="flex flex-col border border-gray-300 shadow-sm hover:bg-main gap-3 p-5 rounded-xl cursor-pointer">
                            <IoMdImages size={20} color={"rgb(118, 208, 235)"} />
                            <div>Create an illustration for a bakery</div>
                        </div>
                    </div>
                </div>
            </main>

            <BottomBar />
        </div>
    );
}
