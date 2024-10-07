"use client";

import { IMessage } from "@/models/message";
import {
  addConversation,
  addMessage,
  selectConversationById,
} from "@/redux/features/conversationSlice";
import { selectLogged } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import messageApi from "@/services/messages/messageApi";
import { Textarea } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";

const InputConversation = () => {
  const [value, setValue] = useState<string>("");
  const { id } = useParams();
  const isLogged = useAppSelector(selectLogged);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const conversation = useAppSelector((state: RootState) =>
    selectConversationById(state, id as string),
  );

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault(); // Prevent the default form submission behavior

    if (value && value !== "") {
      try {
        const newConversation = "new chat box";
        const newMessageUser: IMessage = {
          conversationId: newConversation,
          role: "user",
          content: "new message",
        };
        const messagesForCompletion = (conversation?.messages || []).map((message) => ({
          role: message.role,
          content: message.content || "",
        }));

        if (isLogged) {
          if (id) {
            dispatch(addMessage({ message: newMessageUser }));
            const responseAI = await messageApi.completion({
              messages: [...messagesForCompletion, { role: "user", content: value }],
            });
            dispatch(addMessage({ message: responseAI.reply }));
          } else {
            dispatch(addConversation({ id: newConversation, messages: [] }));
            router.push(`/${newConversation}`);
            dispatch(addMessage({ message: newMessageUser }));
          }
        } else {
          dispatch(
            addMessage({
              message: {
                conversationId: "system",
                role: "user",
                content: value,
              },
            }),
          );
          const responseAI = await messageApi.completion({
            messages: [...messagesForCompletion, { role: "user", content: value }],
          });
          dispatch(
            addMessage({
              message: {
                conversationId: "system",
                role: responseAI.reply.role,
                content: responseAI.reply.content,
              },
            }),
          );
        }
      } catch (error) {
        console.error("API error:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 left-0 w-full max-w-screen-md mx-auto bg-white z-10"
    >
      <Textarea
        type="submit"
        minRows={1}
        maxRows={5}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="lg"
        placeholder={`Message Chat AI`}
        classNames={{
          innerWrapper: "items-center",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(); // Call handleSubmit when Enter is pressed
            setValue(""); // Clear the input field after submission
          }
        }}
        startContent={
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
            <MdAttachFile size={22} />
          </div>
        }
        endContent={
          <div
            className="w-10 h-10 flex justify-center items-center cursor-pointer opacity-70"
            onClick={() => {
              if (value && value !== "") {
                handleSubmit(); // Call handleSubmit when Enter is pressed
                setValue(""); // Clear the input field after submission
              }
            }}
          >
            <FaLocationArrow size={22} />
          </div>
        }
      />
    </form>
  );
};

export default InputConversation;
