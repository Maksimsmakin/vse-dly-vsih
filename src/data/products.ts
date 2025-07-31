import { Product } from '../types';

export const allProducts: Product[] = [
  // Электроника - Смартфоны
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: 52999,
    originalPrice: 59999,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 342,
    category: "Электроника",
    subcategory: "Смартфоны",
    discount: 12,
    description: "Новейший флагманский смартфон Apple с революционным чипом A17 Pro, титановым корпусом и камерой 48 МП с 5x оптическим зумом.",
    brand: "Apple",
    inStock: true,
    specifications: {
      "Экран": "6.7\" Super Retina XDR OLED",
      "Процессор": "Apple A17 Pro",
      "Память": "256 ГБ",
      "Камера": "48 МП + 12 МП + 12 МП",
      "Батарея": "4441 мАч"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 512GB",
    price: 48999,
    originalPrice: 54999,
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 289,
    category: "Электроника",
    subcategory: "Смартфоны",
    discount: 11,
    description: "Премиальный Android-смартфон с S Pen, камерой 200 МП и мощным процессором Snapdragon 8 Gen 3.",
    brand: "Samsung",
    inStock: true,
    specifications: {
      "Экран": "6.8\" Dynamic AMOLED 2X",
      "Процессор": "Snapdragon 8 Gen 3",
      "Память": "512 ГБ",
      "Камера": "200 МП + 50 МП + 12 МП + 10 МП",
      "Батарея": "5000 мАч"
    }
  },
  {
    id: 3,
    name: "Xiaomi 14 Pro 256GB",
    price: 28999,
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 156,
    category: "Электроника",
    subcategory: "Смартфоны",
    description: "Флагманский смартфон с камерой Leica, быстрой зарядкой 120W и MIUI 15.",
    brand: "Xiaomi",
    inStock: true,
    specifications: {
      "Экран": "6.73\" LTPO OLED",
      "Процессор": "Snapdragon 8 Gen 3",
      "Память": "256 ГБ",
      "Камера": "50 МП + 50 МП + 50 МП",
      "Батарея": "4880 мАч"
    }
  },

  // Электроника - Ноутбуки
  {
    id: 4,
    name: "MacBook Air M2 13\" 256GB",
    price: 45999,
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 234,
    category: "Электроника",
    subcategory: "Ноутбуки",
    description: "Ультратонкий ноутбук Apple с чипом M2, Retina дисплеем и до 18 часов автономной работы.",
    brand: "Apple",
    inStock: true,
    specifications: {
      "Процессор": "Apple M2",
      "Память": "8 ГБ RAM + 256 ГБ SSD",
      "Экран": "13.6\" Liquid Retina",
      "Графика": "8-ядерный GPU",
      "Вес": "1.24 кг"
    }
  },
  {
    id: 5,
    name: "ASUS ROG Strix G15 RTX 4060",
    price: 42999,
    originalPrice: 47999,
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 189,
    category: "Электроника",
    subcategory: "Ноутбуки",
    discount: 10,
    description: "Игровой ноутбук с процессором AMD Ryzen 7, видеокартой RTX 4060 и RGB подсветкой.",
    brand: "ASUS",
    inStock: true,
    specifications: {
      "Процессор": "AMD Ryzen 7 7735HS",
      "Память": "16 ГБ RAM + 512 ГБ SSD",
      "Экран": "15.6\" FHD 144Hz",
      "Графика": "NVIDIA RTX 4060 8GB",
      "Вес": "2.3 кг"
    }
  },

  // Электроника - Телевизоры
  {
    id: 6,
    name: "Samsung 55\" QLED 4K QN90C",
    price: 32999,
    originalPrice: 39999,
    image: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 145,
    category: "Электроника",
    subcategory: "Телевизоры",
    discount: 18,
    description: "Премиальный QLED телевизор с технологией Neo Quantum Processor 4K и поддержкой HDR10+.",
    brand: "Samsung",
    inStock: true,
    specifications: {
      "Диагональ": "55 дюймов",
      "Разрешение": "4K Ultra HD (3840x2160)",
      "Технология": "Neo QLED",
      "Smart TV": "Tizen OS",
      "HDR": "HDR10, HDR10+, HLG"
    }
  },

  // Электроника - Наушники
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 12999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 267,
    category: "Электроника",
    subcategory: "Наушники",
    description: "Беспроводные наушники с лучшим в классе шумоподавлением и 30-часовой батареей.",
    brand: "Sony",
    inStock: true,
    specifications: {
      "Тип": "Накладные беспроводные",
      "Шумоподавление": "Активное",
      "Время работы": "30 часов",
      "Быстрая зарядка": "3 мин = 3 часа",
      "Кодеки": "LDAC, SBC, AAC"
    }
  },
  {
    id: 8,
    name: "AirPods Pro 2-го поколения",
    price: 9999,
    originalPrice: 11999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 423,
    category: "Электроника",
    subcategory: "Наушники",
    discount: 17,
    description: "Беспроводные наушники Apple с чипом H2, адаптивным шумоподавлением и пространственным звуком.",
    brand: "Apple",
    inStock: true,
    specifications: {
      "Тип": "Внутриканальные беспроводные",
      "Чип": "Apple H2",
      "Шумоподавление": "Адаптивное",
      "Время работы": "6 часов + 24 часа с кейсом",
      "Зарядка": "Lightning, MagSafe, Qi"
    }
  },

  // Одежда и обувь
  {
    id: 9,
    name: "Nike Air Max 270",
    price: 3999,
    originalPrice: 4999,
    image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 234,
    category: "Одежда и обувь",
    subcategory: "Мужская обувь",
    discount: 20,
    description: "Стильные мужские кроссовки с технологией Air Max для максимального комфорта.",
    brand: "Nike",
    inStock: true,
    specifications: {
      "Материал верха": "Синтетика + текстиль",
      "Подошва": "Резина с технологией Air Max",
      "Назначение": "Повседневная носка",
      "Сезон": "Всесезонные",
      "Размеры": "40-46"
    }
  },
  {
    id: 10,
    name: "Adidas Ultraboost 22",
    price: 5499,
    image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 189,
    category: "Одежда и обувь",
    subcategory: "Мужская обувь",
    description: "Беговые кроссовки с технологией Boost для энергичного отклика при каждом шаге.",
    brand: "Adidas",
    inStock: true,
    specifications: {
      "Материал верха": "Primeknit+",
      "Подошва": "Boost",
      "Назначение": "Бег, тренировки",
      "Сезон": "Всесезонные",
      "Размеры": "40-47"
    }
  },

  // Дом и сад
  {
    id: 11,
    name: "Кофемашина DeLonghi Magnifica S",
    price: 15999,
    originalPrice: 18999,
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 156,
    category: "Дом и сад",
    subcategory: "Кухонная утварь",
    discount: 16,
    description: "Автоматическая кофемашина с встроенной кофемолкой и системой приготовления капучино.",
    brand: "DeLonghi",
    inStock: true,
    specifications: {
      "Тип": "Автоматическая эспрессо-машина",
      "Давление": "15 бар",
      "Емкость резервуара": "1.8 л",
      "Кофемолка": "Встроенная жерновая",
      "Функции": "Эспрессо, капучино, латте"
    }
  },

  // Спорт и отдых
  {
    id: 12,
    name: "Велосипед Trek FX 3 Disc",
    price: 18999,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 89,
    category: "Спорт и отдых",
    subcategory: "Велосипеды",
    description: "Гибридный велосипед для города и легкого бездорожья с дисковыми тормозами.",
    brand: "Trek",
    inStock: true,
    specifications: {
      "Рама": "Алюминий Alpha Gold",
      "Колеса": "28 дюймов",
      "Тормоза": "Дисковые гидравлические",
      "Скорости": "24 скорости",
      "Вес": "12.5 кг"
    }
  }
];

export const getProductsByCategory = (categoryName: string): Product[] => {
  return allProducts.filter(product => product.category === categoryName);
};

export const getProductsBySubcategory = (subcategoryName: string): Product[] => {
  return allProducts.filter(product => product.subcategory === subcategoryName);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.slice(0, 6);
};
