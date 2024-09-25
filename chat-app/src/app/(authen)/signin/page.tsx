"use client";

import React from "react";
import { Button, CircularProgress, Input } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {} from "@/config/authConfig";
import { signIn } from "next-auth/react";
import appConfig from "@/config/appConfig";
import notify from "@/utils/notify";
import { useRouter } from "next/navigation";

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
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const router = useRouter()

    const onSubmit = async (data: FormData) => {
        console.log("data submit", data);

        try {
            // Gửi yêu cầu POST đến API đăng nhập
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            console.log("result", result)

            // Xử lý kết quả từ API
            if (response.ok) {
                console.log("Login successful", result);
                notify.success(result.message);
                router.push(appConfig.path.home)
            } else {
                console.error("Login failed", result);
                notify.error(result.error);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
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
                        className="bg-[#6928ea] text-white py-7 px-9 border-none rounded-lg capitalize font-semibold w-full flex items-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <CircularProgress label="Loading..." /> : "Sign In"}
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
