import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authServices = {
    register: async ({ name, email, password }: { name: string; email: string; password: string }) => {
        // Kiểm tra xem email đã tồn tại chưa
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            throw new Error("Email is already in use");
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    hashPassword: hashedPassword,
                },
            });
            return newUser;
        } catch (error: any) {
            throw new Error(`Failed to register user: ${error.message}`);
        }
    },

    login: async ({ email, password }: { email: string; password: string }) => {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        if (user.hashPassword) {
            const isValidPassword = await bcrypt.compare(password, user.hashPassword);
            if (!isValidPassword) {
                throw new Error("Invalid password");
            }
        }

        // Trả về thông tin người dùng (không bao gồm hashPassword)
        const { hashPassword, ...userData } = user;
        return userData;
    },

};

export default authServices;
