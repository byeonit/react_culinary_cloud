import React from 'react';
import { Clock, Package, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expiryDate?: string;
  addedDate: string;
}

interface Category {
  id: string;
  name: string;
  itemCount: number;
}

interface InventoryContentsProps {
  space: string;
  products: Product[];
  categories: Category[];
}

export default function InventoryContents({ space, products, categories }: InventoryContentsProps) {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // Calculate actual item count for each category
  const categoriesWithActualCount = categories.map(category => ({
    ...category,
    products: groupedProducts[category.name] || [],
    actualItemCount: (groupedProducts[category.name] || []).length
  }));

  // Sort products by expiry date to highlight soon-to-expire items
  const sortedCategories = categoriesWithActualCount.map(category => ({
    ...category,
    products: category.products.sort((a, b) => {
      if (!a.expiryDate) return 1;
      if (!b.expiryDate) return -1;
      return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
    })
  }));

  const getExpiryStatus = (expiryDate?: string) => {
    if (!expiryDate) return null;
    const days = Math.ceil((new Date(expiryDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
    if (days < 0) return { label: 'Expired', class: 'bg-red-100 text-red-700' };
    if (days < 3) return { label: 'Expires soon', class: 'bg-orange-100 text-orange-700' };
    if (days < 7) return { label: 'Expires in ' + days + ' days', class: 'bg-yellow-100 text-yellow-700' };
    return null;
  };

  return (
    <div className="space-y-8">
      {sortedCategories.map(category => (
        <div key={category.id} className={category.products.length === 0 ? 'opacity-50' : ''}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
            <span className="text-sm text-gray-500">{category.actualItemCount} items</span>
          </div>
          
          {category.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.products.map(product => {
                const expiryStatus = getExpiryStatus(product.expiryDate);
                
                return (
                  <div 
                    key={product.id}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:border-green-500 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">
                          {product.quantity} {product.unit}
                        </p>
                      </div>
                      {expiryStatus && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${expiryStatus.class}`}>
                          {expiryStatus.label}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        <span>Added {format(new Date(product.addedDate), 'MMM d')}</span>
                      </div>
                      {product.expiryDate && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Expires {format(new Date(product.expiryDate), 'MMM d')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 text-gray-500 text-sm">
              No items in this category
            </div>
          )}
        </div>
      ))}

      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-500">This {space} is empty. Add some items to get started.</p>
        </div>
      )}

      {products.some(p => p.expiryDate) && (
        <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">About Expiry Dates</h4>
            <p className="text-sm text-blue-700">
              Items are color-coded based on their expiry dates. Red means expired, orange means expiring soon, 
              and yellow means expiring within a week.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}