export interface UserProps {
    userId: string;
    name: string;
    email: string;
    avatarUrl?: string;
    isActive: boolean;
}

export interface MessageProps {
    role: string,
    content: string
    refusal?: boolean
}

export interface ConversationProps {
    conversationId: string;
    participants: string[],
    messages: MessageProps[];
}
