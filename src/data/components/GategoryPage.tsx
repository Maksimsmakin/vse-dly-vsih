import React, { useState } from 'react';
import { ArrowLeft, Grid, List, Filter, Star, Heart, ShoppingCart } from 'lucide-react';
import { Category, Product, Subcategory } from '../types';
import { getProductsByCategory, getProductsBySubcategory } from '../data/products';

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
  isInFavorites: (productId: number) => boolean;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onBack,
  onAddToCart,
  onAddToFavorites,
  isInFavorites
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  const products = selectedSubcategory 
    ? getProductsBySubcategory(selectedSubcategory.name)
    : getProductsByCategory(category.name);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  const filteredProducts = sortedProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Назад</span>
            </button>
            <div className="text-2xl">{category.icon}</div>
            <h1 className="text-2xl font-bold">{category.name}</h1>
            {selectedSubcategory && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-orange-400">{selectedSubcategory.name}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 space-y-6">
            {/* Subcategories */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-4">Подкатегории</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className={`w-full text-left p-2 rounded transition-colors ${
                    !selectedSubcategory 
                      ? 'bg-orange-400 text-black' 
                      : 'hover:bg-gray-700'
                  }`}
                >
                  Все товары
                </button>
                {category.subcategories.map(subcategory => (
                  <button
                    key={subcategory.id}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      selectedSubcategory?.id === subcategory.id
                        ? 'bg-orange-400 text-black'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{subcategory.name}</span>
                      <span className="text-xs text-gray-400">
                        {subcategory.productCount}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-4">Цена</h3>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="От"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="До"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPriceRange([0, 5000])}
                    className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    До 5000₴
                  </button>
                  <button
                    onClick={() => setPriceRange([5000, 20000])}
                    className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    5000-20000₴
                  </button>
                  <button
                    onClick={() => setPriceRange([20000, 100000])}
                    className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    От 20000₴
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  Найдено: {filteredProducts.length} товаров
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
                >
                  <option value="popular">По популярности</option>
                  <option value="price-low">Цена: по возрастанию</option>
                  <option value="price-high">Цена: по убыванию</option>
                  <option value="rating">По рейтингу</option>
                </select>
                <div className="flex border border-gray-600 rounded">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-orange-400 text-black' : 'text-gray-400'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-orange-400 text-black' : 'text-gray-400'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className={`bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover ${
                        viewMode === 'list' ? 'w-full h-32' : 'w-full h-48'
                      }`}
                    />
                    {product.discount && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        -{product.discount}%
                      </div>
                    )}
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 transition-all">
                      <Heart 
                        className={`h-5 w-5 ${isInFavorites(product.id) ? 'fill-current text-red-400' : ''}`}
                        onClick={() => onAddToFavorites(product)}
                      />
                    </button>
                  </div>
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold group-hover:text-orange-400 transition-colors">
                        {product.name}
                      </h3>
                      {product.inStock ? (
                        <span className="text-xs text-green-400 bg-green-400 bg-opacity-20 px-2 py-1 rounded">
                          В наличии
                        </span>
                      ) : (
                        <span className="text-xs text-red-400 bg-red-400 bg-opacity-20 px-2 py-1 rounded">
                          Нет в наличии
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{product.brand}</p>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                      {product.description}
                    </p>
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
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                        className="bg-orange-400 text-black px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors font-semibold disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span>В корзину</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-gray-400">Попробуйте изменить фильтры поиска</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
