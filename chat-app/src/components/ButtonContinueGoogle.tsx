import React from "react";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";

const ButtonContinueGoogle = () => {
    const handleLogin = async () => {
        try {
            const currentUrl = window.location.href;
            const HOST = process.env.HOST;
            const encodedParam = encodeURI(`?redirectUrl=${currentUrl}`);
            window.open(`${HOST}/api/auth/login/google${encodedParam}`, "_self");
        } catch (error) {
            console.error("Error initiating Google OAuth:", error);
        }
    };

    return (
        <Button
            variant="bordered"
            size="lg"
            startContent={<FcGoogle size={24} />}
            className="w-full bg-white hover:bg-gray-200"
            onClick={handleLogin}
        >
            Continue with Google
        </Button>
    );
};

export default ButtonContinueGoogle;
