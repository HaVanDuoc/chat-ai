import { onToggle } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Tooltip } from "@nextui-org/react";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

interface ButtonToggleSidebarProps {
    className?: string;
}

const ButtonToggleSidebar: React.FC<ButtonToggleSidebarProps> = ({ className = "" }) => {
    const dispatch = useAppDispatch();

    return (
        <Tooltip showArrow content="Close sidebar">
            <div
                className={`flex justify-center items-center p-[10px] rounded-lg hover:bg-hover ${className}`}
            >
                <MdOutlineSpaceDashboard
                    size={24}
                    className="text-secondary cursor-pointer"
                    onClick={() => dispatch(onToggle())}
                />
            </div>
        </Tooltip>
    );
};

export default ButtonToggleSidebar;
