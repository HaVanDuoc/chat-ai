// services/user.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userServices = {
    createNewUser: async (userData: { name: string; email: string; hashPassword: string; image?: string }) => {
        try {
            const newUser = await prisma.user.create({
                data: userData,
            });
            return newUser;
        } catch (error: any) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    },

    getUserById: async (id: string) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id },
            });
            return user;
        } catch (error: any) {
            throw new Error(`Failed to retrieve user: ${error.message}`);
        }
    },

    getAllUsers: async () => {
        try {
            const users = await prisma.user.findMany();
            return users;
        } catch (error: any) {
            throw new Error(`Failed to retrieve users: ${error.message}`);
        }
    },

    updateUser: async (id: string, userData: { name?: string; email?: string; hashPassword?: string; image?: string }) => {
        try {
            const updatedUser = await prisma.user.update({
                where: { id },
                data: userData,
            });
            return updatedUser;
        } catch (error: any) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    },

    deleteUser: async (id: string) => {
        try {
            const deletedUser = await prisma.user.delete({
                where: { id },
            });
            return deletedUser;
        } catch (error: any) {
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    },
};

export default userServices;
