// services/conversation.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const conversationServices = {
    createConversation: async (conversationData: { isGroup: boolean; participants: string[] }) => {
        try {
            // Use Prisma client to create a new conversation
            const createdConversation = await prisma.conversation.create({
                data: {
                    isGroup: conversationData.isGroup,
                    participants: conversationData.participants,
                    lastMessagesAt: new Date(),
                },
            });

            return createdConversation; // Return the created conversation
        } catch (error: any) {
            throw new Error(`Failed to create conversation: ${error.message}`);
        }
    },

    // Delete a conversation by ID
    deleteConversation: async (id: string) => {
        try {
            const deletedConversation = await prisma.conversation.delete({
                where: { id },
            });
            return deletedConversation;
        } catch (error: any) {
            throw new Error(`Failed to delete conversation: ${error.message}`);
        }
    },

    // Update a conversation by ID
    updateConversation: async (id: string, updatedData: { name?: string; isGroup?: boolean; participants?: string[] }) => {
        try {
            const updatedConversation = await prisma.conversation.update({
                where: { id },
                data: updatedData,
            });
            return updatedConversation;
        } catch (error: any) {
            throw new Error(`Failed to update conversation: ${error.message}`);
        }
    },

    // Get conversation by ID
    getConversationById: async (id: string) => {
        try {
            const conversation = await prisma.conversation.findUnique({
                where: { id },
                include: {
                    messages: true, // Include messages if needed
                    users: true,    // Include participants if needed
                },
            });

            return conversation;
        } catch (error: any) {
            throw new Error(`Failed to retrieve conversation: ${error.message}`);
        }
    },

    // Get all conversations
    getAllConversations: async () => {
        try {
            const conversations = await prisma.conversation.findMany({
                include: {
                    messages: true, // Include messages for each conversation
                    users: true,    // Include participants for each conversation
                },
                orderBy: {
                    lastMessagesAt: "desc", // Order by latest message time
                },
            });

            return conversations;
        } catch (error: any) {
            throw new Error(`Failed to retrieve conversations: ${error.message}`);
        }
    },

};

export default conversationServices;
