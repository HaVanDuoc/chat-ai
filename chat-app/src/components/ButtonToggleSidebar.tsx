import { onToggle } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const ButtonToggleSidebar = ({ className }: { className?: string }) => {
    const dispatch = useAppDispatch();

    return (
        <MdOutlineSpaceDashboard
            size={24}
            className={`text-secondary cursor-pointer ${className}`}
            onClick={() => dispatch(onToggle())}
        />
    );
};

export default ButtonToggleSidebar;
