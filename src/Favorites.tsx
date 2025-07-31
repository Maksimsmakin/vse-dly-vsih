import React from 'react';
import { X, Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface FavoritesProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteItems: Product[];
  removeFromFavorites: (productId: number) => void;
  onAddToCart: (product: Product) => void;
}

export const Favorites: React.FC<FavoritesProps> = ({
  isOpen,
  onClose,
  favoriteItems,
  removeFromFavorites,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 p-4">
            <h2 className="text-lg font-semibold text-white">
              Обране ({favoriteItems.length})
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Favorite Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {favoriteItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Heart className="h-16 w-16 mb-4" />
                <p className="text-lg mb-2">Обране порожнє</p>
                <p className="text-sm text-center">Додайте товари до обраного, щоб вони з'явилися тут</p>
              </div>
            ) : (
              <div className="space-y-4">
                {favoriteItems.map((product) => (
                  <div key={product.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {product.brand}
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className={`h-3 w-3 ${
                                  star <= Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div>
                            <span className="text-orange-400 font-semibold">
                              {product.price.toLocaleString()} ₴
                            </span>
                            {product.originalPrice && (
                              <div className="text-xs text-gray-500 line-through">
                                {product.originalPrice.toLocaleString()} ₴
                              </div>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => onAddToCart(product)}
                              disabled={!product.inStock}
                              className="bg-orange-400 text-black px-3 py-1 rounded text-xs font-semibold hover:bg-orange-500 transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center space-x-1"
                            >
                              <ShoppingCart className="h-3 w-3" />
                              <span>В кошик</span>
                            </button>
                            <button
                              onClick={() => removeFromFavorites(product.id)}
                              className="text-red-400 hover:text-red-300 text-xs p-1"
                            >
                              <Heart className="h-4 w-4 fill-current" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {favoriteItems.length > 0 && (
            <div className="border-t border-gray-800 p-4">
              <button
                onClick={onClose}
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Продовжити покупки
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
