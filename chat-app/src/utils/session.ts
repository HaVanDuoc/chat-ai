import { Session } from "next-auth";
import notify from "./notify";
import appConfig from "@/config/appConfig";

export const checkSessionExpired = (session: Session) => {
    const isSessionExpired = new Date(session.expires) < new Date();
    if (isSessionExpired) {
        notify.error("Phiên đăng nhập đã hết hạn!");
        return window.location.href = appConfig.path.signin // Chuyển hướng đến trang đăng nhập
    }
}