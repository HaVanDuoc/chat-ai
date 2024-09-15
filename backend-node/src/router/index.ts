import { HttpStatusCode } from "axios"
import { Response } from "express"
import authRoute from "~/router/authRoute"

const router = (app: any) => {
    // app.use("/api/auth", authRoute)

    // app.use(Middlewares.isAuthenticated)

    return app.use((req: Request, res: Response) => {
        return res.status(HttpStatusCode.NotFound).json({ error: true, message: "NOT FOUND" })
    })
}

export default router
