import Icon from "@/components/ui/icon";

export function DownloadSection() {
  return (
    <div className="p-4 animate-fade-in overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-black text-xl shadow-xl neon-glow mx-auto mb-3 animate-float">
          MG
        </div>
        <h2 className="font-display font-black text-2xl gradient-text">MessGram</h2>
        <p className="text-sm text-muted-foreground mt-1">Скачай приложение на любое устройство</p>
      </div>

      {/* Version badge */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="flex items-center gap-1.5 glass-light rounded-xl px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#34d399]" />
          <span className="text-xs text-green-400 font-medium">Версия 2.1.0</span>
        </div>
        <div className="flex items-center gap-1.5 glass-light rounded-xl px-3 py-1.5">
          <Icon name="Lock" size={12} className="text-accent" />
          <span className="text-xs text-accent font-medium">E2EE</span>
        </div>
      </div>

      {/* Android */}
      <div className="glass rounded-2xl p-4 mb-3 hover-lift animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0, animationFillMode: "forwards" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <div className="font-semibold text-foreground">Android</div>
            <div className="text-xs text-muted-foreground">Android 8.0+  ·  48 МБ</div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-xs font-semibold text-foreground">4.9</span>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-lg active:scale-95"
          >
            <Icon name="ShoppingBag" size={15} />
            Google Play
          </a>
          <a
            href="#"
            onClick={e => e.preventDefault()}
            className="flex items-center justify-center gap-2 glass-light hover:bg-secondary/80 text-foreground text-sm font-medium px-3 py-2.5 rounded-xl transition-all border border-border/40"
          >
            <Icon name="Download" size={15} />
            APK
          </a>
        </div>
      </div>

      {/* iOS */}
      <div className="glass rounded-2xl p-4 mb-3 hover-lift animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-xl">🍎</span>
          </div>
          <div>
            <div className="font-semibold text-foreground">iPhone / iPad</div>
            <div className="text-xs text-muted-foreground">iOS 15+  ·  52 МБ</div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-xs font-semibold text-foreground">4.8</span>
          </div>
        </div>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-600 to-slate-800 hover:opacity-90 text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-lg active:scale-95"
        >
          <Icon name="Apple" fallback="Smartphone" size={15} />
          App Store
        </a>
      </div>

      {/* Desktop */}
      <div className="glass rounded-2xl p-4 mb-5 hover-lift animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0, animationFillMode: "forwards" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
            <Icon name="Monitor" size={18} className="text-white" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Десктоп</div>
            <div className="text-xs text-muted-foreground">Windows · macOS · Linux</div>
          </div>
        </div>
        <div className="flex gap-2">
          {["Windows", "macOS", "Linux"].map((os, i) => (
            <button
              key={os}
              onClick={() => {}}
              className="flex-1 glass-light hover:bg-secondary/80 text-foreground text-xs font-medium py-2 rounded-xl transition-all border border-border/40 active:scale-95"
            >
              {os}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold px-1 mb-2">Возможности</p>
        {[
          { icon: "Lock", label: "End-to-End шифрование", color: "text-accent" },
          { icon: "Shield", label: "Двухфакторная защита", color: "text-green-400" },
          { icon: "Zap", label: "Мгновенная доставка", color: "text-yellow-400" },
          { icon: "Users", label: "Группы до 100 000 человек", color: "text-primary" },
          { icon: "Gift", label: "Подарки и монеты", color: "text-pink-400" },
        ].map((f, i) => (
          <div key={f.label} className="glass-light rounded-xl px-3 py-2.5 flex items-center gap-3">
            <Icon name={f.icon} size={15} className={f.color} />
            <span className="text-sm text-foreground">{f.label}</span>
          </div>
        ))}
      </div>

      {/* QR hint */}
      <div className="mt-4 glass rounded-2xl p-4 flex items-center gap-3 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}>
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon name="QrCode" size={18} className="text-primary" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">QR-код для скачивания</div>
          <div className="text-xs text-muted-foreground">Направь камеру и установи за 3 секунды</div>
        </div>
        <button
          onClick={() => {}}
          className="ml-auto text-xs bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary px-3 py-1.5 rounded-xl transition-all font-medium"
        >
          Показать
        </button>
      </div>
    </div>
  );
}
