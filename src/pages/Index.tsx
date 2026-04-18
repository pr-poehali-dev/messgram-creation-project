import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "chats" | "groups" | "channels" | "search" | "shop" | "settings" | "profile";

const MOCK_CHATS = [
  { id: 1, name: "Алёна Михайлова", msg: "Увидимся завтра в 18:00?", time: "14:32", unread: 2, online: true, avatar: "АМ", color: "from-purple-500 to-pink-500" },
  { id: 2, name: "Дима Орлов", msg: "Отличная идея, давай попробуем!", time: "13:15", unread: 0, online: true, avatar: "ДО", color: "from-cyan-500 to-blue-500" },
  { id: 3, name: "Команда Design", msg: "Новые макеты готовы 🎨", time: "12:04", unread: 5, online: false, avatar: "КД", color: "from-green-500 to-teal-500" },
  { id: 4, name: "Мария Петрова", msg: "Спасибо за помощь!", time: "11:47", unread: 0, online: false, avatar: "МП", color: "from-orange-500 to-red-500" },
  { id: 5, name: "Сергей Волков", msg: "Звонок в 15:00?", time: "Вчера", unread: 1, online: true, avatar: "СВ", color: "from-violet-500 to-purple-600" },
];

const MOCK_MESSAGES = [
  { id: 1, text: "Привет! Как дела?", out: false, time: "14:20" },
  { id: 2, text: "Всё отлично! Работаю над новым проектом 🚀", out: true, time: "14:21" },
  { id: 3, text: "Звучит интересно! Расскажи подробнее", out: false, time: "14:22" },
  { id: 4, text: "Это мессенджер с end-to-end шифрованием. Очень круто получается!", out: true, time: "14:24" },
  { id: 5, text: "Вау, это серьёзно! А когда запуск?", out: false, time: "14:28" },
  { id: 6, text: "Увидимся завтра в 18:00?", out: false, time: "14:32" },
];

const MOCK_GROUPS = [
  { id: 1, name: "Разработчики MessGram", members: 128, avatar: "РМ", color: "from-violet-600 to-purple-700", msg: "Новый релиз скоро!", unread: 3 },
  { id: 2, name: "Дизайн-команда", members: 24, avatar: "ДК", color: "from-pink-500 to-rose-600", msg: "Утверждаем макеты", unread: 0 },
  { id: 3, name: "Маркетинг и продвижение", members: 56, avatar: "МП", color: "from-cyan-500 to-sky-600", msg: "Кампания запущена 🎯", unread: 7 },
];

const MOCK_CHANNELS = [
  { id: 1, name: "MessGram Новости", subs: "12.4K", avatar: "МН", color: "from-purple-600 to-indigo-600", msg: "Обновление 2.0 уже скоро!" },
  { id: 2, name: "Техно Дайджест", subs: "89.1K", avatar: "ТД", color: "from-cyan-500 to-teal-600", msg: "Топ-10 трендов 2026" },
  { id: 3, name: "Крипто & Безопасность", subs: "34.7K", avatar: "КБ", color: "from-green-500 to-emerald-600", msg: "E2EE: полный гайд" },
];

const GIFTS = [
  { id: 1, emoji: "🌹", name: "Роза", price: 10, color: "from-red-500 to-pink-600" },
  { id: 2, emoji: "⭐", name: "Звезда", price: 25, color: "from-yellow-400 to-amber-500" },
  { id: 3, emoji: "💎", name: "Бриллиант", price: 100, color: "from-cyan-400 to-blue-500" },
  { id: 4, emoji: "🎁", name: "Подарок", price: 50, color: "from-violet-500 to-purple-600" },
  { id: 5, emoji: "🏆", name: "Кубок", price: 200, color: "from-orange-400 to-amber-600" },
  { id: 6, emoji: "🦋", name: "Бабочка", price: 15, color: "from-indigo-400 to-purple-500" },
];

const COIN_PACKS = [
  { id: 1, amount: 100, price: "59 ₽", bonus: "", popular: false },
  { id: 2, amount: 500, price: "249 ₽", bonus: "+50 бонус", popular: true },
  { id: 3, amount: 1000, price: "449 ₽", bonus: "+150 бонус", popular: false },
  { id: 4, amount: 5000, price: "1990 ₽", bonus: "+1000 бонус", popular: false },
];

function AvatarComp({ initials, color, size = "md", online = false }: { initials: string; color: string; size?: "sm" | "md" | "lg"; online?: boolean }) {
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

function ChatList({ onSelect, selected }: { onSelect: (id: number) => void; selected: number | null }) {
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

function ChatView({ chatId }: { chatId: number | null }) {
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

function GroupsSection() {
  return (
    <div className="p-4 space-y-3 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-lg gradient-text">Группы</h2>
        <button className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary text-sm px-3 py-1.5 rounded-xl transition-all">
          <Icon name="Plus" size={14} />
          Создать
        </button>
      </div>
      {MOCK_GROUPS.map((g, i) => (
        <div key={g.id} className="glass hover-lift rounded-2xl p-4 flex items-center gap-3 cursor-pointer animate-fade-in"
          style={{ animationDelay: `${i * 0.08}s`, opacity: 0, animationFillMode: "forwards" }}>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}>
            {g.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">{g.name}</span>
              {g.unread > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 font-bold">{g.unread}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <Icon name="Users" size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{g.members} участников</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground truncate">{g.msg}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChannelsSection() {
  return (
    <div className="p-4 space-y-3 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-lg gradient-text">Каналы</h2>
        <button className="flex items-center gap-2 bg-accent/20 hover:bg-accent/30 border border-accent/30 text-accent text-sm px-3 py-1.5 rounded-xl transition-all">
          <Icon name="Plus" size={14} />
          Создать
        </button>
      </div>
      <div className="glass-light rounded-2xl px-3 py-2.5 flex items-center gap-2 mb-4">
        <Icon name="Search" size={16} className="text-muted-foreground" />
        <input placeholder="Найти каналы..." className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground text-foreground" />
      </div>
      {MOCK_CHANNELS.map((ch, i) => (
        <div key={ch.id} className="glass hover-lift rounded-2xl p-4 flex items-center gap-3 cursor-pointer animate-fade-in"
          style={{ animationDelay: `${i * 0.08}s`, opacity: 0, animationFillMode: "forwards" }}>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}>
            {ch.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">{ch.name}</span>
              <div className="flex items-center gap-1">
                <Icon name="Users" size={12} className="text-accent" />
                <span className="text-xs text-accent font-medium">{ch.subs}</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{ch.msg}</span>
          </div>
          <button className="flex-shrink-0 bg-primary/20 hover:bg-primary/40 border border-primary/30 text-primary text-xs px-3 py-1.5 rounded-xl transition-all font-medium">
            Подписаться
          </button>
        </div>
      ))}
    </div>
  );
}

function SearchSection() {
  const [query, setQuery] = useState("");
  return (
    <div className="p-4 animate-fade-in">
      <h2 className="font-display font-bold text-lg gradient-text mb-4">Поиск</h2>
      <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 mb-6 neon-glow">
        <Icon name="Search" size={18} className="text-primary" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Имя, @username или номер телефона..."
          className="bg-transparent flex-1 outline-none text-foreground placeholder:text-muted-foreground"
          autoFocus
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold px-1 mb-3">Рекомендуемые</p>
        {MOCK_CHATS.slice(0, 4).map((u, i) => (
          <div key={u.id} className="glass-light hover-lift rounded-2xl p-3 flex items-center gap-3 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${i * 0.06}s`, opacity: 0, animationFillMode: "forwards" }}>
            <AvatarComp initials={u.avatar} color={u.color} online={u.online} />
            <div className="flex-1">
              <div className="font-semibold text-sm text-foreground">{u.name}</div>
              <div className="text-xs text-muted-foreground">@{u.name.toLowerCase().replace(" ", "_")}</div>
            </div>
            <button className="text-xs bg-primary/20 hover:bg-primary/40 border border-primary/30 text-primary px-3 py-1.5 rounded-xl transition-all font-medium">
              Написать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopSection() {
  const [tab, setTab] = useState<"gifts" | "coins">("gifts");
  return (
    <div className="p-4 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-lg gradient-text-pink">Магазин</h2>
        <div className="flex items-center gap-1.5 glass-light rounded-xl px-3 py-1.5">
          <span className="text-xs font-bold text-amber-400">🪙 350</span>
        </div>
      </div>
      <div className="flex gap-2 mb-5 p-1 glass rounded-2xl">
        <button onClick={() => setTab("gifts")} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${tab === "gifts" ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg neon-glow" : "text-muted-foreground hover:text-foreground"}`}>
          🎁 Подарки
        </button>
        <button onClick={() => setTab("coins")} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${tab === "coins" ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-white shadow-lg" : "text-muted-foreground hover:text-foreground"}`}>
          🪙 Монеты
        </button>
      </div>
      {tab === "gifts" ? (
        <div className="grid grid-cols-3 gap-3">
          {GIFTS.map((gift, i) => (
            <button key={gift.id} className="glass hover-lift rounded-2xl p-4 flex flex-col items-center gap-2 transition-all animate-scale-in group"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0, animationFillMode: "forwards" }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gift.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                {gift.emoji}
              </div>
              <span className="text-xs font-semibold text-foreground">{gift.name}</span>
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-xs">🪙</span>
                <span className="text-xs font-bold text-amber-400">{gift.price}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {COIN_PACKS.map((pack, i) => (
            <div key={pack.id} className={`relative glass hover-lift rounded-2xl p-4 flex items-center justify-between animate-fade-in ${pack.popular ? "border border-amber-500/50" : ""}`}
              style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: "forwards" }}>
              {pack.popular && (
                <div className="absolute -top-2.5 left-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-xs font-bold text-white px-2.5 py-0.5 rounded-full">Популярное</div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-xl shadow-lg">🪙</div>
                <div className="text-left">
                  <div className="font-bold text-foreground">{pack.amount.toLocaleString()} монет</div>
                  {pack.bonus && <div className="text-xs text-amber-400 font-medium">{pack.bonus}</div>}
                </div>
              </div>
              <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-bold px-4 py-2 rounded-xl text-sm shadow hover:opacity-90 transition-opacity">
                {pack.price}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SettingsSection() {
  const [twoFa, setTwoFa] = useState(true);
  const [e2ee, setE2ee] = useState(true);
  const [screenshots, setScreenshots] = useState(false);
  const [lastSeen, setLastSeen] = useState(true);

  const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 flex-shrink-0 ${value ? "bg-gradient-to-r from-primary to-accent" : "bg-secondary"}`}
    >
      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${value ? "left-7" : "left-1"}`} />
    </button>
  );

  const items = [
    { icon: "Shield", label: "Двухфакторная аутентификация", desc: "Защита входа через SMS или приложение", color: "text-green-400", value: twoFa, onChange: setTwoFa },
    { icon: "Lock", label: "End-to-End шифрование", desc: "Все чаты шифруются на устройстве", color: "text-accent", value: e2ee, onChange: setE2ee },
    { icon: "Camera", label: "Защита от скриншотов", desc: "Запрет на снимки экрана в чатах", color: "text-pink-400", value: screenshots, onChange: setScreenshots },
    { icon: "Eye", label: "Время последнего визита", desc: "Показывать другим пользователям", color: "text-violet-400", value: lastSeen, onChange: setLastSeen },
  ];

  return (
    <div className="p-4 animate-fade-in">
      <h2 className="font-display font-bold text-lg gradient-text mb-1">Безопасность</h2>
      <p className="text-xs text-muted-foreground mb-5">Управляйте приватностью и защитой аккаунта</p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={item.label} className="glass hover-lift rounded-2xl p-4 flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: "forwards" }}>
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={18} className={item.color} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
            </div>
            <Toggle value={item.value} onChange={item.onChange} />
          </div>
        ))}
      </div>
      <div className="mt-5 glass rounded-2xl p-4 border border-destructive/20">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="AlertTriangle" size={18} className="text-destructive" />
          <span className="font-semibold text-sm text-foreground">Активные сессии</span>
        </div>
        {[
          { device: "Chrome · Windows", loc: "Москва, Россия", current: true },
          { device: "MessGram iOS", loc: "Москва, Россия", current: false },
        ].map((s, i) => (
          <div key={s.device} className={`flex items-center justify-between py-2.5 ${i > 0 ? "border-t border-border/30" : ""}`}>
            <div>
              <div className="text-sm text-foreground font-medium">{s.device}</div>
              <div className="text-xs text-muted-foreground">{s.loc}</div>
            </div>
            {s.current ? (
              <span className="text-xs text-green-400 font-medium px-2 py-1 bg-green-400/10 rounded-lg">Текущая</span>
            ) : (
              <button className="text-xs text-destructive font-medium px-2 py-1 bg-destructive/10 rounded-lg hover:bg-destructive/20 transition-colors">Завершить</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="p-4 animate-fade-in">
      <h2 className="font-display font-bold text-lg gradient-text mb-4">Профиль</h2>
      <div className="glass rounded-3xl p-5 mb-4 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
        <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-xl neon-glow mb-3 animate-float">
          АВ
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-background shadow-[0_0_8px_#34d399]" />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground">Александр Волков</h3>
        <p className="text-sm text-muted-foreground">@alex_volkov</p>
        <div className="flex items-center gap-1.5 mt-2 bg-accent/10 border border-accent/20 rounded-xl px-3 py-1.5">
          <Icon name="Lock" size={12} className="text-accent" />
          <span className="text-xs text-accent font-medium">Защищён E2EE</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Чатов", value: "24", icon: "MessageCircle", color: "text-primary" },
          { label: "Групп", value: "7", icon: "Users", color: "text-accent" },
          { label: "Монет", value: "350", icon: "Coins", color: "text-amber-400" },
        ].map(s => (
          <div key={s.label} className="glass rounded-2xl p-3 flex flex-col items-center gap-1">
            <Icon name={s.icon} size={18} className={s.color} />
            <span className="font-bold text-lg text-foreground">{s.value}</span>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { icon: "Edit3", label: "Редактировать профиль", color: "text-primary" },
          { icon: "Bell", label: "Уведомления", color: "text-accent" },
          { icon: "Palette", label: "Оформление", color: "text-pink-400" },
          { icon: "HelpCircle", label: "Помощь и поддержка", color: "text-muted-foreground" },
          { icon: "LogOut", label: "Выйти из аккаунта", color: "text-destructive" },
        ].map((item, i) => (
          <button key={item.label} className="w-full glass-light hover-lift rounded-2xl p-3.5 flex items-center gap-3 text-left animate-fade-in"
            style={{ animationDelay: `${i * 0.05}s`, opacity: 0, animationFillMode: "forwards" }}>
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
              <Icon name={item.icon} size={16} className={item.color} />
            </div>
            <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}

const NAV_ITEMS: { id: Section; icon: string; label: string }[] = [
  { id: "chats", icon: "MessageCircle", label: "Чаты" },
  { id: "groups", icon: "Users", label: "Группы" },
  { id: "channels", icon: "Rss", label: "Каналы" },
  { id: "search", icon: "Search", label: "Поиск" },
  { id: "shop", icon: "ShoppingBag", label: "Магазин" },
  { id: "settings", icon: "Shield", label: "Защита" },
  { id: "profile", icon: "User", label: "Профиль" },
];

export default function Index() {
  const [section, setSection] = useState<Section>("chats");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const showChatView = section === "chats";

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
              <button className="w-8 h-8 rounded-xl bg-primary/20 hover:bg-primary/30 border border-primary/30 flex items-center justify-center transition-all">
                <Icon name="Edit" size={14} className="text-primary" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {section === "chats" && <ChatList onSelect={setSelectedChat} selected={selectedChat} />}
          {section === "groups" && <GroupsSection />}
          {section === "channels" && <ChannelsSection />}
          {section === "search" && <SearchSection />}
          {section === "shop" && <ShopSection />}
          {section === "settings" && <SettingsSection />}
          {section === "profile" && <ProfileSection />}
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