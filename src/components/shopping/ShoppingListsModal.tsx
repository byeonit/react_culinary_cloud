import React from 'react';
import { Dialog } from '@headlessui/react';
import { List, X, ShoppingCart, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ShoppingListsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShoppingListsModal({ isOpen, onClose }: ShoppingListsModalProps) {
  const navigate = useNavigate();

  const lists = [
    {
      id: '1',
      name: 'Weekly Groceries',
      items: 12,
      date: '2025-03-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Party Supplies',
      items: 8,
      date: '2025-03-20',
      status: 'planned'
    },
    {
      id: '3',
      name: 'Monthly Stock',
      items: 24,
      date: '2025-03-01',
      status: 'completed'
    }
  ];

  const handleViewList = () => {
    navigate('/features/shopping/lists');
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
                Shopping Lists
              </Dialog.Title>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {lists.map(list => (
                <button
                  key={list.id}
                  onClick={handleViewList}
                  className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      list.status === 'completed' ? 'bg-gray-100' : 'bg-green-100'
                    }`}>
                      <ShoppingCart className={`w-5 h-5 ${
                        list.status === 'completed' ? 'text-gray-500' : 'text-green-500'
                      }`} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">{list.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {list.date}
                        <span>•</span>
                        {list.items} items
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
                </button>
              ))}
            </div>

            <button
              onClick={handleViewList}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <List className="w-4 h-4" />
              Create New List
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}