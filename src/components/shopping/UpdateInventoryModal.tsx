import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { RefreshCw, X, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  expiryDate?: string;
}

interface UpdateInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  space: string;
}

export default function UpdateInventoryModal({ isOpen, onClose, space }: UpdateInventoryModalProps) {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Milk', quantity: 2, unit: 'L' },
    { id: '2', name: 'Eggs', quantity: 12, unit: 'pcs' },
    { id: '3', name: 'Bread', quantity: 1, unit: 'loaf' }
  ]);

  const updateQuantity = (id: string, increment: boolean) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: increment ? product.quantity + 1 : Math.max(0, product.quantity - 1)
        };
      }
      return product;
    }));
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving updated inventory:', products);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-xl font-semibold">
                Update {space} Inventory
              </Dialog.Title>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {products.map(product => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.quantity} {product.unit}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, false)}
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, true)}
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Update Inventory
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}