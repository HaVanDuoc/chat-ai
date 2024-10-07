"use client";

import Message from "@/components/layout/conversation/Message";
import React, { useEffect, useState } from "react";
import SuggestConversation from "./SuggestConversation";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectConversationById } from "@/redux/features/conversationSlice";
import { RootState } from "@/redux/store";
import { IMessage } from "@/models/message";

const ContentConversation = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messageEndRef = React.useRef<HTMLDivElement | null>(null);

  const { id } = useParams();
  const conversation = useAppSelector((state: RootState) =>
    selectConversationById(state, (id as string) ?? "system"),
  );

  useEffect(() => {
    setMessages(conversation?.messages || []);
  }, [conversation]);

  useEffect(() => {
    if (messages.length > 0) {
      // Scroll xuống đáy sau khi tin nhắn được render
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <main className="flex flex-1 overflow-auto scroll-smooth">
      {messages && messages.length > 0 ? (
        <div className="flex flex-1 flex-grow flex-col gap-10 w-full max-w-screen-md mx-auto">
          {messages.map((message, index) => (
            <div
              ref={index === messages.length - 1 ? messageEndRef : null}
              className={` ${index === messages.length - 1 ? "flex pb-10" : ""}`}
              key={index}
            >
              <Message message={message} />
            </div>
          ))}
        </div>
      ) : (
        <SuggestConversation />
      )}
    </main>
  );
};

export default ContentConversation;
