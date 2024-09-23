import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import conversationServices from "~/services/conversation";

const conversationControllers = {
    createConversation: async (req: Request, res: Response) => {
        try {
            const { isGroup, participants } = req.body;

            const newConversation = {
                participants,
                isGroup
            };

            // Call the service to create a new conversation
            const createdConversation = await conversationServices.createConversation(newConversation)

            // Send success response
            return res.status(StatusCodes.CREATED).json({ message: "Conversation created successfully", conversation: createdConversation });

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error creating conversation", details: error.message });
        }

    },

    // Delete a conversation by ID
    deleteConversation: async (req: Request, res: Response) => {
        try {
            const { id } = req.params; // Get conversation ID from request params

            const deletedConversation = await conversationServices.deleteConversation(id);

            if (deletedConversation) {
                res.status(200).json({
                    message: "Conversation deleted successfully",
                    conversation: deletedConversation,
                });
            } else {
                res.status(404).json({ error: "Conversation not found" });
            }
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error deleting conversation", details: error.message });
        }
    },

    // Update a conversation by ID
    updateConversation: async (req: Request, res: Response) => {
        try {
            const { id } = req.params; // Get conversation ID from request params
            const updatedData = req.body; // Get updated data from request body

            const updatedConversation = await conversationServices.updateConversation(id, updatedData);

            if (updatedConversation) {
                res.status(200).json({
                    message: "Conversation updated successfully",
                    conversation: updatedConversation,
                });
            } else {
                res.status(404).json({ error: "Conversation not found" });
            }
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error creating conversation", details: error.message });
        }
    },

    // Get conversation by ID
    getConversationById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const conversation = await conversationServices.getConversationById(id);

            if (conversation) {
                res.status(200).json({
                    message: "Conversation retrieved successfully",
                    conversation,
                });
            } else {
                res.status(404).json({ error: "Conversation not found" });
            }
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error creating conversation", details: error.message });
        }
    },

    // Get all conversations
    getAllConversations: async (req: Request, res: Response) => {
        try {
            const conversations = await conversationServices.getAllConversations();

            res.status(200).json({
                message: "Conversations retrieved successfully",
                conversations,
            });
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error creating conversation", details: error.message });
        }
    }
}

export default conversationControllers