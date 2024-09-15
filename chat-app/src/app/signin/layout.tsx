import React from "react";

const SignInLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-full h-screen">
            <div className="m-auto">{children}</div>
        </div>
    );
};

export default SignInLayout;