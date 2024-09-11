import React from "react";

interface ItemSidebarProps {
    startContent?: React.ReactNode;
    content: string;
    endContent?: React.ReactNode;
}

const ItemSidebar: React.FC<ItemSidebarProps> = ({
    startContent,
    content,
    endContent,
}) => {
    return (
        <div className="flex flex-row justify-between items-center w-full rounded-md px-3 py-2 group hover:bg-hover cursor-pointer text-sm">
            <div className="flex flex-row gap-3 items-center">
                {startContent}
                {content}
            </div>

            <div className="text-secondary hidden group-hover:block">
                {endContent}
            </div>
        </div>
    );
};

export default ItemSidebar;
