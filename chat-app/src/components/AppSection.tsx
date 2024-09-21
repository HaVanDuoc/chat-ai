"use client";

import { setCurrentUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import notify from "@/utils/notify";
import api from "@/config/api";

export default function AppSection() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleError = (error: unknown) => {
        if (error instanceof AxiosError) {
            const status = error.response?.status;
            if (status === 401) {
                notify.error("Phiên đã hết hạn. Vui lòng đăng nhập lại.");
                router.push("/ai");
            } else {
                router.push("/ai");
            }
        }
    };

    const checkSession = async () => {
        try {
            const response = await api.get("/auth/session");
            dispatch(setCurrentUser(response.data.user)); // Cập nhật store với thông tin người dùng
            notify.success("Đăng nhập thành công!");
            router.push("/ai");
        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        checkSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return null;
}
