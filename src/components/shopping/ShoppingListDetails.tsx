import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Trash2,
  Edit2,
  Share2,
  Download,
  Printer,
  MoreVertical
} from 'lucide-react';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';

interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  checked: boolean;
  category?: string;
  notes?: string;
}

interface ShoppingListDetailsProps {
  list: {
    id: string;
    name: string;
    items: ShoppingListItem[];
    date: string;
    status: string;
    totalItems: number;
    completedItems: number;
    assignedTo: string;
    destination: string;
  };
  onClose: () => void;
}

export default function ShoppingListDetails({ list, onClose }: ShoppingListDetailsProps) {
  const [items, setItems] = useState(list.items);
  const [editMode, setEditMode] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, unit: 'pcs' });

  const progress = Math.round((items.filter(item => item.checked).length / items.length) * 100) || 0;

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = () => {
    if (newItem.name.trim()) {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          ...newItem,
          checked: false
        }
      ]);
      setNewItem({ name: '', quantity: 1, unit: 'pcs' });
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'planned':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{list.name}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(list.date), 'MMM d, yyyy')}
              </div>
              <div className="flex items-center gap-1">
                <ShoppingCart className="w-4 h-4" />
                {list.completedItems} of {list.totalItems} items
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(list.status)}`}>
                {list.status.charAt(0).toUpperCase() + list.status.slice(1)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${
                      active ? 'bg-gray-50' : ''
                    } flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full`}>
                      <Share2 className="w-4 h-4" />
                      Share List
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${
                      active ? 'bg-gray-50' : ''
                    } flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full`}>
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${
                      active ? 'bg-gray-50' : ''
                    } flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full`}>
                      <Printer className="w-4 h-4" />
                      Print
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-500">
              <AlertCircle className="w-4 h-4" />
              Assigned to: {list.assignedTo}
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <CheckCircle className="w-4 h-4" />
              Destination: {list.destination}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500">
              Last updated 2 hours ago
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-500">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Items List */}
      <div className="p-6">
        <div className="space-y-4">
          {items.map(item => (
            <div 
              key={item.id}
              className={`flex items-center gap-4 p-4 rounded-lg border ${
                item.checked ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
                className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
              />
              <div className="flex-1">
                <span className={item.checked ? 'text-gray-500 line-through' : 'text-gray-900'}>
                  {item.name}
                </span>
                <div className="text-sm text-gray-500">
                  {item.quantity} {item.unit}
                </div>
              </div>
              {editMode && (
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:text-red-600 rounded-lg hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Item Form */}
        {editMode && (
          <div className="mt-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Add new item"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
              />
              <input
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
                min="1"
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
              />
              <select
                value={newItem.unit}
                onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
              >
                <option value="pcs">pcs</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="L">L</option>
                <option value="ml">ml</option>
              </select>
              <button
                onClick={addItem}
                disabled={!newItem.name.trim()}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            <Edit2 className="w-4 h-4" />
            {editMode ? 'Done Editing' : 'Edit List'}
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}