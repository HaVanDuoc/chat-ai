// controllers/message.ts
import { Request, Response } from "express";
import messageServices from "~/services/message";

const messageControllers = {

    createNewMessage: async (req: Request, res: Response) => {
        const { content, conversationId, role } = req.body;

        try {
            const newMessage = await messageServices.createNewMessage({ content, conversationId, role });
            return res.status(201).json(newMessage);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    },

    getMessage: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const message = await messageServices.getMessageById(id);
            return res.status(200).json(message);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    },

    getAllMessages: async (req: Request, res: Response) => {
        try {
            const messages = await messageServices.getAllMessages();
            res.status(200).json({
                message: "Messages retrieved successfully",
                messages,
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error retrieving messages",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },

    updateMessage: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { content } = req.body;

            const updatedMessage = await messageServices.updateMessage(id, {
                content
            });

            if (updatedMessage) {
                res.status(200).json({
                    message: "Message updated successfully",
                    data: updatedMessage,
                });
            } else {
                res.status(404).json({ error: "Message not found" });
            }
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    },

    deleteMessage: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const deletedMessage = await messageServices.deleteMessage(id);

            if (deletedMessage) {
                res.status(200).json({
                    message: "Message deleted successfully",
                });
            } else {
                res.status(404).json({ error: "Message not found" });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    error: "Error deleting message",
                    details: error.message,
                });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    },
};

export default messageControllers;
