import { Request, Response, Router } from "express"
import passport from "passport"
import dotenv from "dotenv"
// import "../config/passport.config"
import { HttpStatusCode } from "axios"
import { PrismaClient, User } from "@prisma/client"
import { StatusCodes } from "http-status-codes"
// import User from "../models/User"

dotenv.config()

const authRoute = Router()
const prisma = new PrismaClient()
const CLIENT_URL = `${process.env.CLIENT_URL}`

authRoute.get("/session", async (req: Request, res: Response) => {
    if (req.isAuthenticated() && req.session?.cookie?.expires) {
        const currentTime = Date.now();
        const sessionExpirationTime = new Date(req.session.cookie.expires).getTime();

        // Check if the session has expired
        if (currentTime > sessionExpirationTime) {
            req.logout((err) => {
                if (err) {
                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                        error: true,
                        message: "Error during logout",
                    });
                }
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    error: true,
                    message: "Session Expired",
                });
            });
        } else {
            // Use Prisma to fetch the user
            const user_id = (req.user as User).id
            const user = await prisma.user.findUnique({
                where: { id: user_id }, 
            });

            if (user) {
                return res.status(StatusCodes.OK).json({ user, message: "Login Successful" });
            } else {
                return res.status(StatusCodes.NOT_FOUND).json({
                    error: true,
                    message: "User not found",
                });
            }
        }
    } else {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            error: true,
            message: "Unauthorized",
        });
    }
});

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
