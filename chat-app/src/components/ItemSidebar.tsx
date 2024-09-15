"use client";

import { onToggle } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

interface ItemSidebarProps {
    startContent?: React.ReactNode;
    content: string;
    endContent?: React.ReactNode;
    link?: string;
}

const ItemSidebar: React.FC<ItemSidebarProps> = ({
    startContent,
    content,
    endContent,
    link,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex w-full group relative">
            <Link
                href={link ?? ""}
                onClick={() => {
                    if (window.innerWidth <= 768) dispatch(onToggle());
                }}
                className="flex flex-row items-center w-full rounded-md px-3 py-3 gap-2  group-hover:bg-hover cursor-pointer text-sm "
            >
                <div className="flex justify-center items-center">
                    {startContent}
                </div>

                <div className="flex overflow-hidden text-nowrap">
                    {content}
                </div>
            </Link>

            <div className="h-full text-secondary hidden group-hover:flex items-center absolute right-1 z-30 pl-2 bg-hover cursor-pointer">
                {endContent}
            </div>
        </div>
    );
};

export default ItemSidebar;
