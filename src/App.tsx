import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Star, Heart, User, MapPin, Phone, Mail } from 'lucide-react';
import { Cart } from './components/Cart';
import { Favorites } from './components/Favorites';
import { CategoryPage } from './components/CategoryPage';
import { categories } from './data/categories';
import { getFeaturedProducts } from './data/products';
import { Product, CartItem, Category } from './types';

const featuredProducts = getFeaturedProducts();

const brands = [
  "Apple", "Samsung", "Sony", "LG", "Nike", "Adidas", "Xiaomi", "HP", "Dell", "Canon", "Nikon", "Bosch"
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'category'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const addToFavorites = (product: Product) => {
    setFavoriteItems(prev => {
      const isAlreadyFavorite = prev.find(item => item.id === product.id);
      if (isAlreadyFavorite) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavoriteItems(prev => prev.filter(item => item.id !== productId));
  };

  const isInFavorites = (productId: number) => {
    return favoriteItems.some(item => item.id === productId);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const openCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedCategory(null);
  };

  if (currentView === 'category' && selectedCategory) {
    return (
      <>
        <CategoryPage
          category={selectedCategory}
          onBack={goHome}
          onAddToCart={addToCart}
          onAddToFavorites={addToFavorites}
          isInFavorites={isInFavorites}
        />
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
        <Favorites
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          favoriteItems={favoriteItems}
          removeFromFavorites={removeFromFavorites}
          onAddToCart={addToCart}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="py-2 border-b border-gray-800 text-sm text-gray-400">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Днепр</span>
                <span className="flex items-center"><Phone className="w-4 h-4 mr-1" />0-500-183-432</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-orange-400 transition-colors">Доставка та оплата</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Гарантія</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Контакти</a>
              </div>
            </div>
          </div>

          {/* Main header */}
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-orange-400">
                  Everything4Everyone
                </div>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-white"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                <button className="hidden lg:flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Menu className="h-5 w-5" />
                  <span>Каталог товарів</span>
                </button>
              </div>

              <div className="flex-1 max-w-xl mx-8 hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Пошук товарів..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-800 text-white px-4 py-3 pr-12 rounded-lg border border-gray-700 focus:border-orange-400 focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsFavoritesOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative"
                >
                  <Heart className="h-6 w-6" />
                  {favoriteItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {favoriteItems.length}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Пошук товарів..."
                  className="w-full bg-gray-700 text-white px-4 py-3 pr-12 rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 6).map(category => (
                  <button 
                    key={category.id} 
                    onClick={() => openCategory(category)}
                    className="text-left p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-lg mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Великий вибір товарів
                <span className="text-orange-400"> за найкращими цінами</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Понад 1 000 000 товарів з безкоштовною доставкою
              </p>
              <button className="bg-orange-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
                Переглянути каталог
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Популярні категорії</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map(category => (
                <div
                  key={category.id}
                  onClick={() => openCategory(category)}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-400">
                    {category.subcategories.length} подкатегорий
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Хіти продажів</h2>
              <button className="text-orange-400 hover:text-orange-300 transition-colors">
                Дивитися всі →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-850 transition-all duration-300 group hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        -{product.discount}%
                      </div>
                    )}
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 transition-all">
                      <Heart 
                        className={`h-5 w-5 ${isInFavorites(product.id) ? 'fill-current text-red-400' : ''}`}
                        onClick={() => addToFavorites(product)}
                      />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-orange-400">
                          {product.price.toLocaleString()} ₴
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            {product.originalPrice.toLocaleString()} ₴
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-orange-400 text-black px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors font-semibold"
                      >
                        В кошик
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Популярні бренди</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {brands.map(brand => (
                <div
                  key={brand}
                  className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="font-semibold">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Безкоштовна доставка</h3>
                <p className="text-gray-400">При замовленні від 1000 ₴</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">↩️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">14 днів на повернення</h3>
                <p className="text-gray-400">Гарантія повернення коштів</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Офіційна гарантія</h3>
                <p className="text-gray-400">На всі товари від виробника</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-4">Everything4Everyone</div>
              <p className="text-gray-400 mb-4">
                Найбільший вибір товарів за найкращими цінами в Україні
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded"></div>
                <div className="w-8 h-8 bg-gray-800 rounded"></div>
                <div className="w-8 h-8 bg-gray-800 rounded"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Покупцям</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Як зробити замовлення</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Способи оплати</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Повернення товару</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компанія</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Про нас</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Новини</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Кар'єра</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Контакти</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакти</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0-500-183-432
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@dropshop.ua
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Днепр, пр. Дмитра Яворницького, 1
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Everything4Everyone. Всі права захищені.</p>
          </div>
        </div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <Favorites
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteItems={favoriteItems}
        removeFromFavorites={removeFromFavorites}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default App;
