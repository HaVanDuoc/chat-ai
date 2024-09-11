export interface Message {
    id: number;
    sender: "User" | "AI Assistant";
    message: string;
    timestamp: string;
    seen: boolean;
}

export interface ChatBox {
    chatId: number;
    participants: [string, string]; // ["User", "AI Assistant"]
    messages: Message[];
}
