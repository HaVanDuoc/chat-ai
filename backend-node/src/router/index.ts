import { Response, Request } from "express"
import authRoute from "~/router/authRoute"
import openaiRoute from "./openaiRoute"
import { StatusCodes } from "http-status-codes"
import { session } from "~/middleware"

const router = (app: any) => {
    app.use("/api/auth", authRoute)
    app.use("/api/ai", openaiRoute)

    // app.use(session) // Middleware check session when request send to server

    return app.use((req: Request, res: Response) => {
        return res.status(StatusCodes.NOT_FOUND).json({ error: true, message: "NOT FOUND" })
    })
}

export default router
