import { Request, Response, Router } from "express"
import passport from "passport"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import "~/config/passport"
import authControllers from "~/controllers/auth"

dotenv.config()

const authRouter = Router()
const prisma = new PrismaClient()
const CLIENT = process.env.CLIENT || "http://localhost:3000"

authRouter.post("/register", authControllers.register); // Đăng ký
authRouter.post("/login", authControllers.login);       // Đăng nhập

export default authRouter
