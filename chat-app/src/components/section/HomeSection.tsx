"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeSection() {
    const router = useRouter();

    useEffect(() => {
        router.push("/ai");
    }, [router]);

    return null;
}
