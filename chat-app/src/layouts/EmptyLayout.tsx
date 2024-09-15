import * as React from "react";

export interface IEmptyLayoutProps {
    children: React.ReactNode;
}

export default function EmptyLayout(props: IEmptyLayoutProps) {
    return props.children;
}
