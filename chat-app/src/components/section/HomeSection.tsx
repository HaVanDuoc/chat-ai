"use client";

import { useRouter } from "next/navigation";

export default function HomeSection() {
    const router = useRouter();
    router.push("/ai");

    return <div></div>;
}
