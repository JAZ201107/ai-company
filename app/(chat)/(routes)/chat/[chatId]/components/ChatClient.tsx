"use client";
import { ChatHeader } from "@/components/ChatHeader";
import { Companion, Message } from "@prisma/client";
import React, { FC } from "react";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient: FC<ChatClientProps> = ({ companion }) => {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
