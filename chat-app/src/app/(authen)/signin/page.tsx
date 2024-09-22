"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {} from "@/config/authConfig";
import { signIn } from "next-auth/react";
import appConfig from "@/config/appConfig";

const schema = z.object({
    email: z.string().email("*Invalid email address").nonempty("*Email is required"),
    password: z
        .string()
        .min(6, "*Password must be at least 6 characters long")
        .nonempty("*Password is required"),
});

type FormData = z.infer<typeof schema>;

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("data submit", data);
        reset();
    };

    return (
        <section className="relative bg-custom-gradient min-h-screen flex items-center justify-center">
            <div className="bg-white text-black mx-5 my-12 sm:py-16 sm:px-12 px-5 py-8 rounded-3xl flex flex-col gap-7 items-center max-w-[520px] w-full">
                <h3 className="text-3xl font-bold">Welcome Back!</h3>

                <div className="flex flex-col gap-4 w-full">
                    <Button
                        endContent={<FcGoogle size={24} />}
                        className="text-lg py-8 px-9 border border-black rounded-full bg-white w-full"
                        onClick={() => signIn("google", { redirectTo: appConfig.path.home })}
                    >
                        Sign in via Google
                    </Button>
                    <Button
                        endContent={<FaGithub size={24} />}
                        className="text-lg py-8 px-9 border border-black rounded-full bg-white w-full "
                        onClick={() => signIn("github", { redirectTo: appConfig.path.home })}
                    >
                        Sign in via Github
                    </Button>
                </div>

                <div className="flex flex-row items-center w-full gap-2">
                    <div className="flex border border-width-1 border-gray-300 flex-1"></div>
                    <div>OR</div>
                    <div className="flex border border-width-1 border-gray-300 flex-1"></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                    <Input
                        {...register("email")}
                        placeholder="Email"
                        size="lg"
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                        classNames={{
                            inputWrapper: "rounded-lg h-14",
                            input: "text-medium",
                        }}
                    />

                    <Input
                        {...register("password")}
                        placeholder="Password"
                        size="lg"
                        isInvalid={!!errors.password}
                        errorMessage={errors.password?.message}
                        classNames={{
                            inputWrapper: "rounded-lg h-14",
                            input: "text-medium",
                        }}
                    />

                    <Button
                        type="submit"
                        className="bg-[#6928ea] text-white py-7 px-9 border-none rounded-lg capitalize font-semibold w-full"
                    >
                        Sign In
                    </Button>
                </form>

                <div className="flex flex-row items-start gap-1">
                    <p>Don’t have an account?</p>
                    <Link href={`/signup`} className="font-bold">
                        Sign Up
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;
