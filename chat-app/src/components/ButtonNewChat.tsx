import React from "react";
import { FiEdit } from "react-icons/fi";

const ButtonNewChat = ({ className }: { className?: string }) => {
    return <FiEdit size={20} className={`text-secondary cursor-pointer ${className}`} />;
};

export default ButtonNewChat;
