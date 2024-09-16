import { pathPage } from "@/config";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInSection = () => {
    return (
        <div className="flex w-full h-full max-w-screen p-5">
            <div className="flex flex-col gap-4 items-center mx-auto my-[150px] w-[350px]">
                <div className="font-bold text-4xl mb-8">Welcome</div>
                <Input
                    placeholder="Email address*"
                    variant="bordered"
                    size="lg"
                />
                <Button className="w-full bg-primary text-white" size="lg">
                    Continue
                </Button>

                <div className="flex flex-row items-center gap-1">
                    <div>{`Don't have an account?`}</div>
                    <Link href={pathPage.signup} className="text-primary">
                        Sign Up
                    </Link>
                </div>

                <div className="flex flex-row items-center w-full gap-1">
                    <div className="flex border border-width-1 border-gray-300 flex-1"></div>
                    <div>OR</div>
                    <div className="flex border border-width-1 border-gray-300 flex-1"></div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Button
                        variant="bordered"
                        size="lg"
                        startContent={<FcGoogle size={24} />}
                        className="w-full bg-white hover:bg-gray-200"
                    >
                        Continue with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignInSection;
