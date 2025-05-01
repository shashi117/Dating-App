
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
};

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="relative">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask for dating advice, conversation starters, or help with your dating profile..."
          className="pr-12 min-h-[100px] resize-none"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 bottom-2 bg-love-500 hover:bg-love-600 text-white"
          disabled={!message.trim() || isLoading}
        >
          <Send size={18} />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        DateGenius is an AI assistant and may produce inaccurate information.
      </p>
    </form>
  );
};

export default ChatInput;
