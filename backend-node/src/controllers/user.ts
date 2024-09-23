// controllers/user.ts
import { Request, Response } from "express";
import userServices from "~/services/user";

const userControllers = {
    createNewUser: async (req: Request, res: Response) => {
        try {
            const { name, email, hashPassword, image } = req.body;
            const newUser = await userServices.createNewUser({
                name,
                email,
                hashPassword,
                image,
            });

            res.status(201).json({
                message: "User created successfully",
                user: newUser,
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error creating user",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },

    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userServices.getUserById(id);

            if (user) {
                res.status(200).json({
                    message: "User retrieved successfully",
                    user,
                });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error retrieving user",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },

    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await userServices.getAllUsers();
            res.status(200).json({
                message: "Users retrieved successfully",
                users,
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error retrieving users",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, email, hashPassword, image } = req.body;

            const updatedUser = await userServices.updateUser(id, {
                name,
                email,
                hashPassword,
                image,
            });

            if (updatedUser) {
                res.status(200).json({
                    message: "User updated successfully",
                    user: updatedUser,
                });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error updating user",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const deletedUser = await userServices.deleteUser(id);

            if (deletedUser) {
                res.status(200).json({
                    message: "User deleted successfully",
                });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error deleting user",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },
};

export default userControllers;
