import { useState } from "react";
import Icon from "@/components/ui/icon";
import { type Section, NAV_ITEMS } from "@/components/messenger/mockData";
import { ChatList, ChatView } from "@/components/messenger/ChatPanel";
import { GroupsSection, ChannelsSection, SearchSection, ShopSection, SettingsSection, ProfileSection } from "@/components/messenger/Sections";
import { DownloadSection } from "@/components/messenger/DownloadSection";

export default function Index() {
  const [section, setSection] = useState<Section>("chats");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const showChatView = section === "chats";

  const openChat = (id: number) => {
    setSelectedChat(id);
    setSection("chats");
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-background bg-mesh">
      {/* Sidebar Nav */}
      <div className="w-16 flex-shrink-0 glass border-r border-border/40 flex flex-col items-center py-4 gap-1 z-10">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-black text-sm neon-glow mb-3 animate-float">
          MG
        </div>
        <div className="w-8 h-px bg-border/40 mb-2" />
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            title={item.label}
            className={`relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 group hover-lift ${
              section === item.id ? "nav-active neon-glow" : "hover:bg-secondary/60"
            }`}
          >
            <Icon
              name={item.icon}
              size={20}
              className={section === item.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}
            />
            {item.id === "chats" && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[9px] font-bold text-white flex items-center justify-center">8</span>
            )}
          </button>
        ))}
      </div>

      {/* Left Panel */}
      <div className={`${showChatView ? "w-72 flex-shrink-0" : "flex-1"} border-r border-border/40 flex flex-col overflow-hidden`}>
        <div className="p-4 pb-0 flex-shrink-0">
          <div className="flex items-center justify-between">
            <h1 className="font-display font-black text-xl gradient-text">
              {NAV_ITEMS.find(n => n.id === section)?.label}
            </h1>
            {section === "chats" && (
              <button className="w-8 h-8 rounded-xl bg-primary/20 hover:bg-primary/30 border border-primary/30 flex items-center justify-center transition-all active:scale-95">
                <Icon name="Edit" size={14} className="text-primary" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {section === "chats" && <ChatList onSelect={setSelectedChat} selected={selectedChat} />}
          {section === "groups" && <GroupsSection onOpenChat={openChat} />}
          {section === "channels" && <ChannelsSection />}
          {section === "search" && <SearchSection onOpenChat={openChat} />}
          {section === "shop" && <ShopSection />}
          {section === "settings" && <SettingsSection />}
          {section === "profile" && <ProfileSection />}
          {section === "download" && <DownloadSection />}
        </div>
      </div>

      {/* Chat Panel */}
      {showChatView && (
        <div className="flex-1 flex overflow-hidden">
          <ChatView chatId={selectedChat} />
        </div>
      )}
    </div>
  );
}
