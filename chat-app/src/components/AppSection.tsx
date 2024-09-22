"use client";

import appConfig from "@/config/appConfig";
import { useRouter } from "next/navigation";

export default function AppSection() {
    const router = useRouter();

    router.push(appConfig.path.ai);

    return null;
}
