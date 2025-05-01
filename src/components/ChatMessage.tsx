
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

type ChatMessageProps = {
  content: string;
  isUser: boolean;
  isLoading?: boolean;
};

const ChatMessage = ({ content, isUser, isLoading = false }: ChatMessageProps) => {
  return (
    <div className={cn("flex items-start gap-3 mb-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <Avatar className="w-8 h-8 bg-love-500 text-white flex items-center justify-center">
          <Bot size={18} />
        </Avatar>
      )}
      
      <div 
        className={cn(
          "chat-bubble",
          isUser ? "chat-bubble-user" : "chat-bubble-ai",
          isLoading && "animate-pulse"
        )}
      >
        {isLoading ? (
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-current animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-current animate-bounce delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-current animate-bounce delay-200"></div>
          </div>
        ) : (
          <div className="whitespace-pre-line">{content}</div>
        )}
      </div>

      {isUser && (
        <Avatar className="w-8 h-8 bg-gray-200 flex items-center justify-center">
          <User size={18} className="text-love-700" />
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
