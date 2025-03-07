import React, { useState } from 'react';
import { ShoppingCart, Plus, RefreshCw, Package, List, Archive } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShoppingPlanner } from '../../hooks/useShoppingPlanner';
import UpdateInventoryModal from '../../components/shopping/UpdateInventoryModal';
import AddProductModal from '../../components/shopping/AddProductModal';
import ShoppingListsModal from '../../components/shopping/ShoppingListsModal';
import ManageCategoriesModal from '../../components/shopping/ManageCategoriesModal';
import InventoryContents from '../../components/shopping/InventoryContents';
import RegistrationModal from '../../components/shopping/RegistrationModal';

// Sample data - in a real app, this would come from your backend
const sampleProducts = {
  fridge: [
    {
      id: '1',
      name: 'Milk',
      quantity: 2,
      unit: 'L',
      category: 'Dairy',
      expiryDate: '2025-03-20',
      addedDate: '2025-03-10'
    },
    {
      id: '2',
      name: 'Eggs',
      quantity: 12,
      unit: 'pcs',
      category: 'Dairy',
      expiryDate: '2025-03-25',
      addedDate: '2025-03-12'
    },
    {
      id: '3',
      name: 'Yogurt',
      quantity: 4,
      unit: 'cups',
      category: 'Dairy',
      expiryDate: '2025-03-15',
      addedDate: '2025-03-08'
    },
    {
      id: '4',
      name: 'Carrots',
      quantity: 500,
      unit: 'g',
      category: 'Vegetables',
      expiryDate: '2025-03-18',
      addedDate: '2025-03-11'
    }
  ],
  pantry: [
    {
      id: '5',
      name: 'Rice',
      quantity: 2,
      unit: 'kg',
      category: 'Groceries',
      addedDate: '2025-03-01'
    },
    {
      id: '6',
      name: 'Pasta',
      quantity: 3,
      unit: 'boxes',
      category: 'Groceries',
      addedDate: '2025-03-05'
    },
    {
      id: '7',
      name: 'Chicken Breast',
      quantity: 2,
      unit: 'pcs',
      category: 'Meat',
      expiryDate: '2025-03-15',
      addedDate: '2025-03-10'
    },
    {
      id: '8',
      name: 'Tomatoes',
      quantity: 4,
      unit: 'pcs',
      category: 'Produce',
      expiryDate: '2025-03-14',
      addedDate: '2025-03-11'
    }
  ],
  freezer: [
    {
      id: '9',
      name: 'Frozen Peas',
      quantity: 400,
      unit: 'g',
      category: 'Vegetables',
      expiryDate: '2025-06-15',
      addedDate: '2025-03-01'
    },
    {
      id: '10',
      name: 'Ice Cream',
      quantity: 1,
      unit: 'L',
      category: 'Desserts',
      expiryDate: '2025-05-20',
      addedDate: '2025-03-10'
    },
    {
      id: '11',
      name: 'Ground Beef',
      quantity: 500,
      unit: 'g',
      category: 'Meat',
      expiryDate: '2025-06-01',
      addedDate: '2025-03-05'
    },
    {
      id: '12',
      name: 'Mixed Berries',
      quantity: 300,
      unit: 'g',
      category: 'Produce',
      expiryDate: '2025-05-30',
      addedDate: '2025-03-08'
    }
  ]
};

// All available categories with their item counts
const categories = [
  { id: '1', name: 'Groceries', itemCount: 45 },
  { id: '2', name: 'Dairy', itemCount: 12 },
  { id: '3', name: 'Meat', itemCount: 8 },
  { id: '4', name: 'Produce', itemCount: 23 },
  { id: '5', name: 'Pantry', itemCount: 67 }
];

export default function Shopping() {
  const [activeSpace, setActiveSpace] = useState('fridge');
  const [updateInventoryOpen, setUpdateInventoryOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [shoppingListsOpen, setShoppingListsOpen] = useState(false);
  const [manageCategoriesOpen, setManageCategoriesOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const { saveShoppingPlannerData, loading, error } = useShoppingPlanner();
  
  const spaces = [
    { id: 'fridge', name: 'Fridge', icon: '🧊' },
    { id: 'pantry', name: 'Pantry', icon: '🥫' },
    { id: 'freezer', name: 'Freezer', icon: '❄️' }
  ];

  const quickAddItems = [
    { name: 'Milk', category: 'Frequently Added' },
    { name: 'Bread', category: 'Frequently Added' },
    { name: 'Eggs', category: 'Favorite Products' },
    { name: 'Bananas', category: 'Recently Bought' }
  ];

  const handleSaveShoppingPlanner = async () => {
    const success = await saveShoppingPlannerData({
      generatedBy: 'user',
      spaces: {
        fridge: { items: sampleProducts.fridge },
        pantry: { items: sampleProducts.pantry },
        freezer: { items: sampleProducts.freezer }
      },
      categories
    });

    if (success) {
      setShowRegistration(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Planner</h1>
            <p className="text-gray-600">Manage your inventory and create smart shopping lists</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSaveShoppingPlanner}
              disabled={loading}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                loading
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {loading ? 'Saving...' : 'Save Shopping Planner'}
            </button>
            <button 
              onClick={() => setShoppingListsOpen(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Shopping List
            </button>
          </div>
        </div>

        {/* Storage Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {spaces.map((space) => (
            <button
              key={space.id}
              onClick={() => setActiveSpace(space.id)}
              className={`p-6 rounded-xl border-2 transition-all ${
                activeSpace === space.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-green-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{space.icon}</span>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900">{space.name}</h3>
                  <p className="text-sm text-gray-500">
                    {sampleProducts[space.id].length} items
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inventory Contents */}
          <div className="lg:col-span-2">
            <InventoryContents 
              space={spaces.find(s => s.id === activeSpace)?.name || ''} 
              products={sampleProducts[activeSpace]}
              categories={categories}
            />
          </div>

          {/* Actions Panel */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button 
                  onClick={() => setUpdateInventoryOpen(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50"
                >
                  <RefreshCw className="w-5 h-5 text-green-500" />
                  <span>Update Inventory</span>
                </button>
                <button 
                  onClick={() => setAddProductOpen(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50"
                >
                  <Package className="w-5 h-5 text-green-500" />
                  <span>Add New Product</span>
                </button>
                <button 
                  onClick={() => setShoppingListsOpen(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50"
                >
                  <List className="w-5 h-5 text-green-500" />
                  <span>View Shopping Lists</span>
                </button>
                <button 
                  onClick={() => setManageCategoriesOpen(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50"
                >
                  <Archive className="w-5 h-5 text-green-500" />
                  <span>Manage Categories</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Pro Tip</h2>
              <p className="text-green-50 mb-4">
                Link your shopping lists to specific storage spaces for automatic inventory updates when items are purchased.
              </p>
              <Link
                to="/features/shopping/tips"
                className="inline-flex items-center text-sm text-white hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <UpdateInventoryModal
        isOpen={updateInventoryOpen}
        onClose={() => setUpdateInventoryOpen(false)}
        space={activeSpace}
      />
      <AddProductModal
        isOpen={addProductOpen}
        onClose={() => setAddProductOpen(false)}
      />
      <ShoppingListsModal
        isOpen={shoppingListsOpen}
        onClose={() => setShoppingListsOpen(false)}
      />
      <ManageCategoriesModal
        isOpen={manageCategoriesOpen}
        onClose={() => setManageCategoriesOpen(false)}
        categories={categories}
      />
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 text-red-700 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      <RegistrationModal 
        isOpen={showRegistration} 
        onClose={() => setShowRegistration(false)} 
      />
    </div>
  );
}