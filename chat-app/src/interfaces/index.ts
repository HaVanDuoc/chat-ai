export interface UserProps {
    userId: string;
    name: string;
    email: string;
    avatarUrl?: string;
    isActive: boolean;
}

export interface MessageProps {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
    seen: boolean;
}

export interface ChatBox {
    chatId: number;
    participants: string[],
    messages: MessageProps[];
}
