import { Response, Request } from "express"
import authRoute from "~/router/authRoute"
import openaiRoute from "./openaiRoute"
import { StatusCodes } from "http-status-codes"
import { session } from "~/middleware"
import conversationRouter from "./conversationRoute"
import userRouter from "./userRoute"
import messageRouter from "./messageRoute"

const router = (app: any) => {
    app.use("/api/ai", openaiRoute)
    app.use("/api/auth", authRoute)
    app.use("/api/conversation", conversationRouter)
    app.use("/api/users", userRouter)
    app.use("/api/messages", messageRouter)

    // app.use(session) // Middleware check session when request send to server

    return app.use((req: Request, res: Response) => {
        return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: "NOT FOUND" })
    })
}

export default router
