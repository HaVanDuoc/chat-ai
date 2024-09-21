import { ConversationProps } from "@/models";

export const CHATS: ConversationProps[] = [
    {
        conversationId: "1",
        participants: ["user1", "assistant"],
        messages: [
            {
                role: "user",
                content: "Hello, how are you?",
            },
            {
                role: "assistant",
                content: "I'm good, thank you! How can I assist you today?",
            },
        ],
    },
    {
        conversationId: "2",
        participants: ["user2", "assistant"],
        messages: [
            {
                role: "user",
                content: "Can you help me with my project?",
            },
            {
                role: "assistant",
                content: "Of course! Please provide more details about your project.",
            },
        ],
    },
    {
        conversationId: "3",
        participants: ["user3", "assistant"],
        messages: [
            {
                role: "user",
                content: "What is the weather like today?",
            },
            {
                role: "assistant",
                content: "The weather is sunny and 25°C. Perfect for outdoor activities!",
            },
        ],
    },
    {
        conversationId: "4",
        participants: ["user4", "assistant"],
        messages: [
            {
                role: "user",
                content: "Tell me a joke.",
            },
            {
                role: "assistant",
                content: "Why don't scientists trust atoms? Because they make up everything!",
            },
        ],
    },
    {
        conversationId: "5",
        participants: ["user5", "assistant"],
        messages: [
            {
                role: "user",
                content: "Can you recommend a good book?",
            },
            {
                role: "assistant",
                content: "Sure! 'Atomic Habits' by James Clear is a great read.",
            },
        ],
    },
    {
        conversationId: "6",
        participants: ["user6", "assistant"],
        messages: [
            {
                role: "user",
                content: "What's the best way to learn programming?",
            },
            {
                role: "assistant",
                content: "Start with learning the basics of a programming language, like Python, and practice by building small projects.",
            },
        ],
    },
    {
        conversationId: "7",
        participants: ["user7", "assistant"],
        messages: [
            {
                role: "user",
                content: "Can you explain recursion?",
            },
            {
                role: "assistant",
                content: "Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.",
            },
        ],
    },
    {
        conversationId: "8",
        participants: ["user8", "assistant"],
        messages: [
            {
                role: "user",
                content: "How do I improve my coding skills?",
            },
            {
                role: "assistant",
                content: "Practice consistently, contribute to open source, and read other people's code to understand different coding styles.",
            },
        ],
    },
    {
        conversationId: "9",
        participants: ["user9", "assistant"],
        messages: [
            {
                role: "user",
                content: "Can you translate 'Hello' into French?",
            },
            {
                role: "assistant",
                content: "'Hello' in French is 'Bonjour'.",
            },
        ],
    },
    {
        conversationId: "10",
        participants: ["user10", "assistant"],
        messages: [
            {
                role: "user",
                content: "What is the capital of Japan?",
            },
            {
                role: "assistant",
                content: "The capital of Japan is Tokyo.",
            },
        ],
    },
];
