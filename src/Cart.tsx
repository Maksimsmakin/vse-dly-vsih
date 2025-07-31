import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 p-4">
            <h2 className="text-lg font-semibold text-white">
              Корзина ({totalItems})
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingBag className="h-16 w-16 mb-4" />
                <p className="text-lg mb-2">Корзина пуста</p>
                <p className="text-sm text-center">Добавьте товары, чтобы они появились здесь</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {item.product.brand}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                              className="rounded-full bg-gray-700 p-1 hover:bg-gray-600"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="rounded-full bg-gray-700 p-1 hover:bg-gray-600"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-400 hover:text-red-300 text-xs"
                          >
                            Удалить
                          </button>
                        </div>
                        <div className="mt-2">
                          <span className="text-orange-400 font-semibold">
                            {(item.product.price * item.quantity).toLocaleString()} ₴
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-800 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Итого:</span>
                <span className="text-xl font-bold text-orange-400">
                  {totalPrice.toLocaleString()} ₴
                </span>
              </div>
              <button className="w-full bg-orange-400 text-black py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
                Оформить заказ
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Продолжить покупки
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
