// services/message.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const messageServices = {
    createNewMessage: async (messageData: { content: string; conversationId: string; role: string }) => {
        try {
            const newMessage = await prisma.message.create({
                data: {
                    content: messageData.content,
                    conversationId: messageData.conversationId,
                    role: messageData.role,
                },
            });
            return newMessage;
        } catch (error: any) {
            throw new Error(`Failed to create message: ${error.message}`);
        }
    },

    getMessageById: async (id: string) => {
        try {
            const message = await prisma.message.findUnique({
                where: {
                    id: id,
                },
            });

            if (!message) {
                throw new Error(`Message with ID ${id} not found`);
            }

            return message;
        } catch (error: any) {
            throw new Error(`Failed to retrieve message: ${error.message}`);
        }
    },

    getAllMessages: async () => {
        try {
            const messages = await prisma.message.findMany();
            return messages;
        } catch (error: any) {
            throw new Error(`Failed to retrieve messages: ${error.message}`);
        }
    },

    updateMessage: async (id: string, messageData: { content: string }) => {
        try {
            const updatedMessage = await prisma.message.update({
                where: { id },
                data: messageData,
            });
            return updatedMessage;
        } catch (error: any) {
            throw new Error(`Failed to update message: ${error.message}`);
        }
    },

    deleteMessage: async (id: string) => {
        try {
            const deletedMessage = await prisma.message.delete({
                where: { id },
            });
            return deletedMessage;
        } catch (error: any) {
            throw new Error(`Failed to delete message: ${error.message}`);
        }
    },
};

export default messageServices;
