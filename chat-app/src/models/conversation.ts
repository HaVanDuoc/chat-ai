import { MessageProps } from "./message";

export interface ConversationProps {
    conversationId: string;
    participants: string[],
    messages: MessageProps[];
}
