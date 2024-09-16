import { HttpStatusCode } from "axios"
import { Response } from "express"
import authRoute from "~/router/authRoute"
import openaiRoute from "./openaiRoute"

const router = (app: any) => {
    // app.use("/api/auth", authRoute)
    app.use("/api/ai", openaiRoute)

    // app.use(Middlewares.isAuthenticated)

    return app.use((req: Request, res: Response) => {
        return res.status(HttpStatusCode.NotFound).json({ error: true, message: "NOT FOUND" })
    })
}

export default router
