import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

// Khởi tạo PrismaClient bên ngoài middleware để tái sử dụng
const prisma = new PrismaClient();

export const session = async (req: Request & { user?: { id?: any } }, res: Response, next: NextFunction) => {
    console.log("req.session", req.session);

    // Kiểm tra xem người dùng đã đăng nhập và session còn hợp lệ hay không
    if (req.isAuthenticated() && req.session?.cookie?.expires) {
        const currentTime = Date.now();
        const sessionExpirationTime = new Date(req.session.cookie.expires).getTime();

        // Nếu session đã hết hạn
        if (currentTime > sessionExpirationTime) {
            return req.logout((err) => {
                if (err) {
                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                        error: true,
                        message: "Error during logout",
                    });
                }
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    error: true,
                    message: "Session Expired",
                });
            });
        } else {
            // Lấy thông tin người dùng từ cơ sở dữ liệu
            try {
                const user_id = req.user?.id;
                if (!user_id) {
                    return res.status(StatusCodes.UNAUTHORIZED).json({
                        error: true,
                        message: "Unauthorized - No user ID",
                    });
                }

                const user = await prisma.user.findUnique({
                    where: { id: user_id },
                });

                if (user) {
                    return res.status(StatusCodes.OK).json({ user, message: "Login Successful" });
                } else {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        error: true,
                        message: "User not found",
                    });
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    message: "Error fetching user",
                });
            }
        }
    } else {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            error: true,
            message: "Unauthorized - No valid session",
        });
    }

    // Gọi `next()` nếu mọi thứ đều hợp lệ
    next();
};
