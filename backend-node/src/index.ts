import express from "express"
import initRoute from "~/router"
import dotenv from "dotenv"
import session from "express-session"
import MongoStore from "connect-mongo"
import passport from "passport"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDatabase } from "~/utils"

dotenv.config();

const CLIENT = process.env.CLIENT || "*"
const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || "http://localhost"
const SECRET_KEY = process.env.SECRET_KEY || "*"
const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
    console.error("DATABASE_URL is not defined in the environment variables!")
    process.exit(1)
}

const corsOptions = {
    origin: [CLIENT],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}

const app = express()

//middleware
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Router
initRoute(app)

app.listen(PORT, () => {
    console.log(`[server] Server is running at ${HOST}:${PORT}`)
    connectDatabase()
})
