import React from "react";
import { FiEdit } from "react-icons/fi";
import { Tooltip } from "@nextui-org/react";
import { pathPage } from "@/config";
import Link from "next/link";

const ButtonNewChat = ({ className }: { className?: string }) => {
    return (
        <Tooltip showArrow={true} content="New Chat">
            <Link href={pathPage?.ai} className="flex justify-center items-center p-[10px] rounded-lg hover:bg-hover">
                <FiEdit
                    size={20}
                    className={`text-secondary cursor-pointer ${
                        className ? className : ""
                    }`}
                />
            </Link>
        </Tooltip>
    );
};

export default ButtonNewChat;
