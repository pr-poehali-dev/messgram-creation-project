import { useState } from "react";
import Icon from "@/components/ui/icon";
import { MOCK_CHATS, MOCK_GROUPS, MOCK_CHANNELS, GIFTS, COIN_PACKS } from "./mockData";
import { AvatarComp } from "./ChatPanel";

export function GroupsSection() {
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

export function ChannelsSection() {
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

export function SearchSection() {
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

export function ShopSection() {
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

export function SettingsSection() {
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

export function ProfileSection() {
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
