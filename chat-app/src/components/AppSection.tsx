"use client";

import { api } from "@/config";
import { setCurrentUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import notify from "@/utils/notify";

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
                notify.error("Đã xảy ra lỗi. Vui lòng thử lại.");
                router.push("/ai");
                console.error("Axios Error:", error);
            }
        } else {
            notify.error("Đã xảy ra lỗi không xác định.");
            console.error("Unknown Error:", error);
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
