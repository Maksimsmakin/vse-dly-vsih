import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: "Электроника",
    icon: "📱",
    subcategories: [
      { id: 11, name: "Смартфоны", productCount: 1250 },
      { id: 12, name: "Ноутбуки", productCount: 890 },
      { id: 13, name: "Планшеты", productCount: 340 },
      { id: 14, name: "Наушники", productCount: 670 },
      { id: 15, name: "Телевизоры", productCount: 450 },
      { id: 16, name: "Игровые консоли", productCount: 120 },
      { id: 17, name: "Умные часы", productCount: 280 },
      { id: 18, name: "Камеры", productCount: 190 }
    ]
  },
  {
    id: 2,
    name: "Одежда и обувь",
    icon: "👕",
    subcategories: [
      { id: 21, name: "Мужская одежда", productCount: 2100 },
      { id: 22, name: "Женская одежда", productCount: 3200 },
      { id: 23, name: "Детская одежда", productCount: 1800 },
      { id: 24, name: "Мужская обувь", productCount: 890 },
      { id: 25, name: "Женская обувь", productCount: 1200 },
      { id: 26, name: "Аксессуары", productCount: 950 },
      { id: 27, name: "Сумки и рюкзаки", productCount: 670 },
      { id: 28, name: "Украшения", productCount: 540 }
    ]
  },
  {
    id: 3,
    name: "Дом и сад",
    icon: "🏠",
    subcategories: [
      { id: 31, name: "Мебель", productCount: 1500 },
      { id: 32, name: "Декор", productCount: 2200 },
      { id: 33, name: "Кухонная утварь", productCount: 1100 },
      { id: 34, name: "Ванная комната", productCount: 780 },
      { id: 35, name: "Садовые товары", productCount: 650 },
      { id: 36, name: "Инструменты", productCount: 890 },
      { id: 37, name: "Освещение", productCount: 450 },
      { id: 38, name: "Текстиль", productCount: 920 }
    ]
  },
  {
    id: 4,
    name: "Спорт и отдых",
    icon: "⚽",
    subcategories: [
      { id: 41, name: "Фитнес", productCount: 890 },
      { id: 42, name: "Туризм и кемпинг", productCount: 670 },
      { id: 43, name: "Велосипеды", productCount: 340 },
      { id: 44, name: "Зимний спорт", productCount: 280 },
      { id: 45, name: "Водный спорт", productCount: 190 },
      { id: 46, name: "Командные игры", productCount: 450 },
      { id: 47, name: "Единоборства", productCount: 230 },
      { id: 48, name: "Охота и рыбалка", productCount: 560 }
    ]
  },
  {
    id: 5,
    name: "Красота и здоровье",
    icon: "💄",
    subcategories: [
      { id: 51, name: "Косметика", productCount: 1800 },
      { id: 52, name: "Парфюмерия", productCount: 670 },
      { id: 53, name: "Уход за кожей", productCount: 1200 },
      { id: 54, name: "Медтехника", productCount: 340 },
      { id: 55, name: "БАДы и витамины", productCount: 890 },
      { id: 56, name: "Массажеры", productCount: 280 },
      { id: 57, name: "Уход за волосами", productCount: 750 },
      { id: 58, name: "Маникюр и педикюр", productCount: 450 }
    ]
  },
  {
    id: 6,
    name: "Авто и мото",
    icon: "🚗",
    subcategories: [
      { id: 61, name: "Автозапчасти", productCount: 2500 },
      { id: 62, name: "Масла и жидкости", productCount: 450 },
      { id: 63, name: "Аксессуары", productCount: 1200 },
      { id: 64, name: "Шины и диски", productCount: 890 },
      { id: 65, name: "Мотозапчасти", productCount: 670 },
      { id: 66, name: "Инструменты", productCount: 340 },
      { id: 67, name: "Автохимия", productCount: 280 },
      { id: 68, name: "Электроника", productCount: 560 }
    ]
  },
  {
    id: 7,
    name: "Детские товары",
    icon: "🧸",
    subcategories: [
      { id: 71, name: "Игрушки", productCount: 2100 },
      { id: 72, name: "Детская мебель", productCount: 450 },
      { id: 73, name: "Коляски", productCount: 180 },
      { id: 74, name: "Автокресла", productCount: 120 },
      { id: 75, name: "Детское питание", productCount: 340 },
      { id: 76, name: "Развивающие игры", productCount: 890 },
      { id: 77, name: "Детская одежда", productCount: 1500 },
      { id: 78, name: "Школьные товары", productCount: 670 }
    ]
  },
  {
    id: 8,
    name: "Книги и канцелярия",
    icon: "📚",
    subcategories: [
      { id: 81, name: "Художественная литература", productCount: 1200 },
      { id: 82, name: "Учебная литература", productCount: 890 },
      { id: 83, name: "Канцтовары", productCount: 1500 },
      { id: 84, name: "Офисная техника", productCount: 340 },
      { id: 85, name: "Творчество и хобби", productCount: 780 },
      { id: 86, name: "Настольные игры", productCount: 450 },
      { id: 87, name: "Подарочные издания", productCount: 280 },
      { id: 88, name: "Электронные книги", productCount: 190 }
    ]
  }
];
