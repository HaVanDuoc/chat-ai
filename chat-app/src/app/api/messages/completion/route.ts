import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Khởi tạo OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Đảm bảo bạn đã cấu hình biến môi trường OPENAI_API_KEY
});

export const POST = async (req: Request): Promise<Response> => {
    try {
        // Lấy dữ liệu từ body request
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid input: 'messages' is required and must be an array" }, { status: 400 });
        }

        // Gọi API OpenAI
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
        });

        // Lấy phản hồi từ OpenAI
        const reply = completion.choices[0].message;

        return NextResponse.json({ reply });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error with OpenAI API: ', error);
        return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
    }
};
