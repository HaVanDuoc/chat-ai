import { Request, Response, Router } from "express"
import dotenv from "dotenv"
import OpenAI from "openai";

dotenv.config()

const openaiRoute = Router()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

openaiRoute.post("/completion", async (req: Request, res: Response) => {
    const { messages } = req.body;

    console.log('message', messages)

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
        });

        const reply = completion.choices[0];

        console.log('reply', reply)

        res.json({ reply });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
})

export default openaiRoute
