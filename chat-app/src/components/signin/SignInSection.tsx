"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ButtonContinueGoogle from "@/components/signin/ButtonContinueGoogle";
import appConfig from "@/config/appConfig";

const SignInSection = () => {
    const router = useRouter();

    return (
        <div className="flex w-full h-full max-w-screen p-5">
            <div className="mx-auto my-[50px] w-[350px]">
                <Button
                    variant="light"
                    size="md"
                    startContent={<FaArrowLeft />}
                    className="mb-10"
                    onClick={() => router.push(appConfig.path.home)}
                >
                    Home
                </Button>

                <div className="flex flex-col  gap-4 items-center">
                    <div className="font-bold text-4xl mb-8">Welcome</div>
                    <Input placeholder="Email address*" variant="bordered" size="lg" />
                    <Button className="w-full bg-primary text-white" size="lg">
                        Continue
                    </Button>

                    <div className="flex flex-row items-center gap-1">
                        <div>{`Don't have an account?`}</div>
                        <Link href={appConfig.path.signup} className="text-primary">
                            Sign Up
                        </Link>
                    </div>

                    <div className="flex flex-row items-center w-full gap-1">
                        <div className="flex border border-width-1 border-gray-300 flex-1"></div>
                        <div>OR</div>
                        <div className="flex border border-width-1 border-gray-300 flex-1"></div>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <ButtonContinueGoogle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInSection;
