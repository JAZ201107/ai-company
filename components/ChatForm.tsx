"use client";
import React, { ChangeEvent, FC, FormEvent } from "react";
import { ChatRequestOptions } from "ai";
import { Input } from "./ui/input";
import { SendHorizonal } from "lucide-react";
import { Button } from "./ui/button";

interface ChatFormProps {
  isLoading: boolean;
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
}

const ChatForm: FC<ChatFormProps> = ({
  isLoading,
  input,
  handleInputChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="border-t border-primary/10 py-4 flex items-center gap-x-2"
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message"
        className="rounded-lg bg-primary/10"
      />

      <Button disabled={isLoading} variant="ghost">
        <SendHorizonal className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default ChatForm;
