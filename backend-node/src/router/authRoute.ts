import { Request, Response, Router } from "express"
import passport from "passport"
import dotenv from "dotenv"
// import "../config/passport.config"
import { HttpStatusCode } from "axios"
// import User from "../models/User"

dotenv.config()

const authRoute = Router()
const CLIENT_URL = `${process.env.CLIENT_URL}`

// authRoute.get("/session", async (req: Request, res: Response) => {
//     if (req.isAuthenticated() && req.session && req.session.cookie && req.session.cookie.expires) {
//         const currentTime = new Date().getTime()
//         const sessionExpirationTime = new Date(req.session.cookie.expires).getTime()

//         if (currentTime > sessionExpirationTime) {
//             req.logout(() => {
//                 res.status(HttpStatusCode.Unauthorized).json({
//                     error: true,
//                     message: "Session Expired",
//                 })
//             })
//         } else {
//             const auth_id = req.user
//             const user = await User.findById(auth_id)
//             if (user) {
//                 res.status(HttpStatusCode.Ok).json({ user, message: "Login Successful" })
//             }
//         }
//     } else {
//         res.status(HttpStatusCode.Unauthorized).json({ error: true, message: "Unauthorized" })
//     }
// })

authRoute.get("/login/google", passport.authenticate("google"))

authRoute.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/api/auth/login/failed",
    }),
    (req: Request, res: Response) => {
        res.redirect(CLIENT_URL)
    },
)

authRoute.get("/login/failed", (req: Request, res: Response) => {
    return res.status(HttpStatusCode.BadRequest).send({
        error: true,
        message: "Login failed",
    })
})

authRoute.get("/logout", (req: Request, res: Response) => {
    req.logout((err) => {
        try {
            res.status(HttpStatusCode.Ok).json({ message: "Logout successful" })
        } catch (error) {
            res.status(HttpStatusCode.Ok).json({ error: error, message: "Logout Failed" })
        }
    })
})

export default authRoute
