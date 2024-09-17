import { NextFunction, Response, Request } from "express"
import authRoute from "~/router/authRoute"
import openaiRoute from "./openaiRoute"
import { StatusCodes } from "http-status-codes"
import { PrismaClient, User } from "@prisma/client"

const router = (app: any) => {
    app.use("/api/auth", authRoute)
    app.use("/api/ai", openaiRoute)


    return app.use((req: Request, res: Response) => {
        return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: "NOT FOUND" })
    })
}

export default router
