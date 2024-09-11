import { onToggle } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Tooltip } from "@nextui-org/react";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const ButtonToggleSidebar = ({ className }: { className?: string }) => {
    const dispatch = useAppDispatch();

    return (
        <Tooltip showArrow={true} content="Close sidebar">
            <div className="flex justify-center items-center p-[10px] rounded-lg hover:bg-hover">
                <MdOutlineSpaceDashboard
                    size={24}
                    className={`text-secondary cursor-pointer ${
                        className ? className : ""
                    }`}
                    onClick={() => dispatch(onToggle())}
                />
            </div>
        </Tooltip>
    );
};

export default ButtonToggleSidebar;
