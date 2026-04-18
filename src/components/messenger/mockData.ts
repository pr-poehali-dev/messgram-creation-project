export type Section = "chats" | "groups" | "channels" | "search" | "shop" | "settings" | "profile" | "download";

export const MOCK_CHATS = [
  { id: 1, name: "Алёна Михайлова", msg: "Увидимся завтра в 18:00?", time: "14:32", unread: 2, online: true, avatar: "АМ", color: "from-purple-500 to-pink-500" },
  { id: 2, name: "Дима Орлов", msg: "Отличная идея, давай попробуем!", time: "13:15", unread: 0, online: true, avatar: "ДО", color: "from-cyan-500 to-blue-500" },
  { id: 3, name: "Команда Design", msg: "Новые макеты готовы 🎨", time: "12:04", unread: 5, online: false, avatar: "КД", color: "from-green-500 to-teal-500" },
  { id: 4, name: "Мария Петрова", msg: "Спасибо за помощь!", time: "11:47", unread: 0, online: false, avatar: "МП", color: "from-orange-500 to-red-500" },
  { id: 5, name: "Сергей Волков", msg: "Звонок в 15:00?", time: "Вчера", unread: 1, online: true, avatar: "СВ", color: "from-violet-500 to-purple-600" },
];

export const MOCK_MESSAGES = [
  { id: 1, text: "Привет! Как дела?", out: false, time: "14:20" },
  { id: 2, text: "Всё отлично! Работаю над новым проектом 🚀", out: true, time: "14:21" },
  { id: 3, text: "Звучит интересно! Расскажи подробнее", out: false, time: "14:22" },
  { id: 4, text: "Это мессенджер с end-to-end шифрованием. Очень круто получается!", out: true, time: "14:24" },
  { id: 5, text: "Вау, это серьёзно! А когда запуск?", out: false, time: "14:28" },
  { id: 6, text: "Увидимся завтра в 18:00?", out: false, time: "14:32" },
];

export const MOCK_GROUPS = [
  { id: 1, name: "Разработчики MessGram", members: 128, avatar: "РМ", color: "from-violet-600 to-purple-700", msg: "Новый релиз скоро!", unread: 3 },
  { id: 2, name: "Дизайн-команда", members: 24, avatar: "ДК", color: "from-pink-500 to-rose-600", msg: "Утверждаем макеты", unread: 0 },
  { id: 3, name: "Маркетинг и продвижение", members: 56, avatar: "МП", color: "from-cyan-500 to-sky-600", msg: "Кампания запущена 🎯", unread: 7 },
];

export const MOCK_CHANNELS = [
  { id: 1, name: "MessGram Новости", subs: "12.4K", avatar: "МН", color: "from-purple-600 to-indigo-600", msg: "Обновление 2.0 уже скоро!" },
  { id: 2, name: "Техно Дайджест", subs: "89.1K", avatar: "ТД", color: "from-cyan-500 to-teal-600", msg: "Топ-10 трендов 2026" },
  { id: 3, name: "Крипто & Безопасность", subs: "34.7K", avatar: "КБ", color: "from-green-500 to-emerald-600", msg: "E2EE: полный гайд" },
];

export const GIFTS = [
  { id: 1, emoji: "🌹", name: "Роза", price: 10, color: "from-red-500 to-pink-600" },
  { id: 2, emoji: "⭐", name: "Звезда", price: 25, color: "from-yellow-400 to-amber-500" },
  { id: 3, emoji: "💎", name: "Бриллиант", price: 100, color: "from-cyan-400 to-blue-500" },
  { id: 4, emoji: "🎁", name: "Подарок", price: 50, color: "from-violet-500 to-purple-600" },
  { id: 5, emoji: "🏆", name: "Кубок", price: 200, color: "from-orange-400 to-amber-600" },
  { id: 6, emoji: "🦋", name: "Бабочка", price: 15, color: "from-indigo-400 to-purple-500" },
];

export const COIN_PACKS = [
  { id: 1, amount: 100, price: "59 ₽", bonus: "", popular: false },
  { id: 2, amount: 500, price: "249 ₽", bonus: "+50 бонус", popular: true },
  { id: 3, amount: 1000, price: "449 ₽", bonus: "+150 бонус", popular: false },
  { id: 4, amount: 5000, price: "1990 ₽", bonus: "+1000 бонус", popular: false },
];

export const NAV_ITEMS: { id: Section; icon: string; label: string }[] = [
  { id: "chats", icon: "MessageCircle", label: "Чаты" },
  { id: "groups", icon: "Users", label: "Группы" },
  { id: "channels", icon: "Rss", label: "Каналы" },
  { id: "search", icon: "Search", label: "Поиск" },
  { id: "shop", icon: "ShoppingBag", label: "Магазин" },
  { id: "settings", icon: "Shield", label: "Защита" },
  { id: "profile", icon: "User", label: "Профиль" },
  { id: "download", icon: "Download", label: "Скачать" },
];