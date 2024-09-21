import React from "react";
import { FiEdit } from "react-icons/fi";
import { Tooltip } from "@nextui-org/react";
import { pathPage } from "@/config";
import Link from "next/link";

interface ButtonNewChatProps {
    className?: string;
}

const ButtonNewChat: React.FC<ButtonNewChatProps> = ({ className = "" }) => {
    return (
        <Tooltip showArrow content="New Chat">
            <Link
                href={pathPage?.ai}
                className={`flex justify-center items-center p-[10px] rounded-lg hover:bg-hover ${className}`}
            >
                <FiEdit size={20} className="text-secondary cursor-pointer" />
            </Link>
        </Tooltip>
    );
};

export default ButtonNewChat;
