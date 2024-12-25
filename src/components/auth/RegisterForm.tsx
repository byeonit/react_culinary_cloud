import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import CongratulationsPage from './CongratulationsPage';

interface RegisterFormProps {
  onClose: () => void;
}

export default function RegisterForm({ onClose }: RegisterFormProps) {
  const { registerWithEmail, loading, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate name
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    const success = await registerWithEmail(formData.email, formData.password, formData.name);
    if (success) {
      setRegistrationComplete(true);
    }
  };

  if (registrationComplete) {
    return <CongratulationsPage userName={formData.name} />;
  }

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <ChefHat className="w-8 h-8 text-emerald-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
      <p className="text-gray-600 mb-6">
        Join our community to access your personalized recipes and features
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500"
            required
          />
        </div>

        {(error || authError) && (
          <div className="text-red-500 text-sm">
            {error || authError}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            loading
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
}