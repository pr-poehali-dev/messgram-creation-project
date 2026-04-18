import { useState } from "react";
import Icon from "@/components/ui/icon";
import { MOCK_CHATS, MOCK_MESSAGES } from "./mockData";

export function AvatarComp({ initials, color, size = "md", online = false }: { initials: string; color: string; size?: "sm" | "md" | "lg"; online?: boolean }) {
  const sizes = { sm: "w-9 h-9 text-xs", md: "w-11 h-11 text-sm", lg: "w-16 h-16 text-lg" };
  return (
    <div className="relative flex-shrink-0">
      <div className={`${sizes[size]} rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center font-bold text-white shadow-lg`}>
        {initials}
      </div>
      {online && <div className="online-dot absolute -bottom-0.5 -right-0.5 border-2 border-background rounded-full" />}
    </div>
  );
}

export function ChatList({ onSelect, selected }: { onSelect: (id: number) => void; selected: number | null }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 pb-2">
        <div className="flex items-center gap-2 glass-light rounded-2xl px-3 py-2.5">
          <Icon name="Search" size={16} className="text-muted-foreground" />
          <input placeholder="Поиск чатов..." className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground text-foreground" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-2 space-y-0.5 py-1">
        {MOCK_CHATS.map((chat, i) => (
          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-200 hover:bg-secondary/60 text-left animate-fade-in ${selected === chat.id ? "nav-active" : ""}`}
            style={{ animationDelay: `${i * 0.05}s`, opacity: 0, animationFillMode: "forwards" }}
          >
            <AvatarComp initials={chat.avatar} color={chat.color} online={chat.online} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground truncate">{chat.name}</span>
                <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-xs text-muted-foreground truncate">{chat.msg}</span>
                {chat.unread > 0 && (
                  <span className="ml-2 flex-shrink-0 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function ChatView({ chatId }: { chatId: number | null }) {
  const [input, setInput] = useState("");
  const chat = MOCK_CHATS.find(c => c.id === chatId);

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8 animate-fade-in">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float">
          <Icon name="MessageCircle" size={36} className="text-primary" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-foreground">Выберите чат</h3>
          <p className="text-sm text-muted-foreground mt-1">Все сообщения защищены end-to-end шифрованием</p>
        </div>
        <div className="flex items-center gap-2 glass-light rounded-xl px-3 py-2">
          <Icon name="Lock" size={14} className="text-accent" />
          <span className="text-xs text-accent font-medium">E2EE включено</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full animate-slide-in-right">
      <div className="glass border-b border-border/40 px-4 py-3 flex items-center gap-3">
        <AvatarComp initials={chat.avatar} color={chat.color} online={chat.online} />
        <div className="flex-1">
          <div className="font-semibold text-foreground">{chat.name}</div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {chat.online ? (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#34d399]" />
                <span className="text-xs text-green-400">онлайн</span>
              </>
            ) : (
              <span className="text-xs text-muted-foreground">был(а) в 12:00</span>
            )}
            <span className="text-xs text-muted-foreground mx-1">·</span>
            <Icon name="Lock" size={10} className="text-accent" />
            <span className="text-xs text-accent">E2EE</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-secondary/60 transition-colors">
            <Icon name="Phone" size={18} className="text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl hover:bg-secondary/60 transition-colors">
            <Icon name="Video" size={18} className="text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl hover:bg-secondary/60 transition-colors">
            <Icon name="MoreVertical" size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {MOCK_MESSAGES.map((msg, i) => (
          <div
            key={msg.id}
            className={`flex ${msg.out ? "justify-end" : "justify-start"} animate-fade-in`}
            style={{ animationDelay: `${i * 0.06}s`, opacity: 0, animationFillMode: "forwards" }}
          >
            <div className={`max-w-[72%] px-4 py-2.5 ${msg.out ? "msg-out text-white" : "msg-in text-foreground"}`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <div className={`flex items-center justify-end gap-1 mt-1 ${msg.out ? "text-white/60" : "text-muted-foreground"}`}>
                <span className="text-xs">{msg.time}</span>
                {msg.out && <Icon name="CheckCheck" size={12} className="text-cyan-300" />}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-start animate-fade-in">
          <div className="msg-in px-4 py-3 flex items-center gap-1.5">
            <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground block" />
            <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground block" />
            <span className="typing-dot w-2 h-2 rounded-full bg-muted-foreground block" />
          </div>
        </div>
      </div>

      <div className="glass border-t border-border/40 p-3 flex items-end gap-2">
        <button className="p-2.5 rounded-xl hover:bg-secondary/60 transition-colors flex-shrink-0">
          <Icon name="Paperclip" size={18} className="text-muted-foreground" />
        </button>
        <div className="flex-1 glass-light rounded-2xl px-4 py-2.5 flex items-center gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Сообщение..."
            className="bg-transparent flex-1 outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <button className="flex-shrink-0">
            <Icon name="Smile" size={18} className="text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
        <button className="p-2.5 rounded-xl bg-primary hover:bg-primary/90 transition-all neon-glow flex-shrink-0 hover-lift">
          <Icon name="Send" size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}
