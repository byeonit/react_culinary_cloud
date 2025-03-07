import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  ChevronLeft, 
  Calendar, 
  Clock, 
  Plus,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Search,
  Filter,
  SortDesc
} from 'lucide-react';
import CreateShoppingListModal from '../../components/shopping/CreateShoppingListModal';
import ShoppingListDetails from '../../components/shopping/ShoppingListDetails';

const sampleLists = [
  {
    id: '1',
    name: 'Weekly Groceries',
    items: [
      { id: '1', name: 'Milk', quantity: 2, unit: 'L', checked: true },
      { id: '2', name: 'Bread', quantity: 1, unit: 'loaf', checked: false },
      { id: '3', name: 'Eggs', quantity: 12, unit: 'pcs', checked: false }
    ],
    date: '2025-03-15',
    status: 'active',
    totalItems: 12,
    completedItems: 1,
    assignedTo: 'Personal',
    destination: 'Fridge'
  },
  {
    id: '2',
    name: 'Party Supplies',
    items: [
      { id: '4', name: 'Chips', quantity: 3, unit: 'bags', checked: false },
      { id: '5', name: 'Soda', quantity: 4, unit: 'bottles', checked: false }
    ],
    date: '2025-03-20',
    status: 'planned',
    totalItems: 8,
    completedItems: 0,
    assignedTo: 'Family',
    destination: 'Pantry'
  },
  {
    id: '3',
    name: 'Monthly Stock',
    items: [
      { id: '6', name: 'Rice', quantity: 5, unit: 'kg', checked: true },
      { id: '7', name: 'Pasta', quantity: 3, unit: 'boxes', checked: true },
      { id: '8', name: 'Canned Tomatoes', quantity: 6, unit: 'cans', checked: true }
    ],
    date: '2025-03-01',
    status: 'completed',
    totalItems: 24,
    completedItems: 24,
    assignedTo: 'Personal',
    destination: 'Pantry'
  }
];

export default function ShoppingLists() {
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'items'>('date');
  const [createListModalOpen, setCreateListModalOpen] = useState(false);

  const filteredLists = sampleLists
    .filter(list => {
      const matchesSearch = list.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'completed' ? list.status === 'completed' : list.status !== 'completed');
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        case 'items':
          return b.totalItems - a.totalItems;
        default:
          return 0;
      }
    });

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

  const currentList = selectedList ? sampleLists.find(list => list.id === selectedList) : null;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              to="/features/shopping"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Shopping Planner
            </Link>
          </div>
          <button 
            onClick={() => setCreateListModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New List
          </button>
        </div>

        {selectedList ? (
          <ShoppingListDetails 
            list={currentList!}
            onClose={() => setSelectedList(null)}
          />
        ) : (
          <>
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search shopping lists..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'completed')}
                      className="pl-9 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 appearance-none bg-white"
                    >
                      <option value="all">All Lists</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="relative">
                    <SortDesc className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'items')}
                      className="pl-9 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 appearance-none bg-white"
                    >
                      <option value="date">Sort by Date</option>
                      <option value="name">Sort by Name</option>
                      <option value="items">Sort by Items</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping Lists */}
            <div className="space-y-4">
              {filteredLists.map(list => (
                <div
                  key={list.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{list.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {list.date}
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
                      <button
                        onClick={() => setSelectedList(list.id)}
                        className="flex items-center gap-2 text-green-500 hover:text-green-600"
                      >
                        View Details
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-sm">
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
                          {list.status === 'completed' ? 'Completed' : 'Last updated'} 2 hours ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <CreateShoppingListModal
          isOpen={createListModalOpen}
          onClose={() => setCreateListModalOpen(false)}
        />
      </div>
    </div>
  );
}