import { Request, Response } from "express";
import authServices from "~/services/auth";

const authControllers = {
    register: async (req: Request, res: Response) => {
        const { name, email, password } = req.body;

        try {
            const newUser = await authServices.register({ name, email, password });
            return res.status(201).json({ message: "Register Successfully", user: newUser });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    },

    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const user = await authServices.login({ email, password });
            return res.status(200).json({ message: "Login Successfully", user });
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    },
};

export default authControllers