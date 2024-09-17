import passport from "passport"
import dotenv from "dotenv"
import { Strategy } from "passport-google-oauth20"
import { PrismaClient } from "@prisma/client"

dotenv.config()
const prisma = new PrismaClient()

const GOOGLE_CLIENT_ID = process.env["GOOGLE_CLIENT_ID"] || ""
const GOOGLE_CLIENT_SECRET = process.env["GOOGLE_CLIENT_SECRET"] || ""

passport.use(
    new Strategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
            scope: ["profile", "email"],
            state: true,
        },
        async function verify(accessToken: any, refreshToken: any, profile: any, cb: any) {
            try {
                // Find Federated Credential
                const federatedCredential = await prisma.federatedCredential.findUnique({
                    where: {
                        provider_subject: {
                            provider: "https://accounts.google.com",
                            subject: profile.id,
                        },
                    },
                })

                if (!federatedCredential) {
                    // Create a new User
                    const newUser = await prisma.user.create({
                        data: {
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            emailVerified: profile.emails[0].verified ? new Date() : null,
                            image: profile.photos?.[0]?.value,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    })

                    const userId = newUser.id

                    // Save Federated Credential
                    await prisma.federatedCredential.create({
                        data: {
                            userId: userId,
                            provider: "https://accounts.google.com",
                            subject: profile.id,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    })

                    // const user = await User.findById(id)

                    return cb(null, newUser)
                } else {
                    // Find the associated user
                    const user = await prisma.user.findUnique({
                        where: { id: federatedCredential.userId },
                    })

                    if (!user) {
                        return cb(null, false)
                    }
                    return cb(null, user)
                }
            } catch (error) {
                console.log("Error during Google OAuth authentication", error)
                return cb(error)
            }
        },
    ),
)

passport.serializeUser(function (user: any, cb) {
    process.nextTick(function () {
        cb(null, user.id)
    })
})

passport.deserializeUser(async function (id: any, cb) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
        })
        cb(null, user)
    } catch (error) {
        cb(error)
    }
})