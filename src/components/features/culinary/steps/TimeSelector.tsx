import React, { useState } from 'react';
import { Timer, Zap, Clock, Coffee, UtensilsCrossed } from 'lucide-react';

interface TimePreset {
  id: string;
  label: string;
  icon: React.ElementType;
  time: number;
  description: string;
}

const timePresets: TimePreset[] = [
  {
    id: 'quick',
    label: 'Quick & Easy',
    icon: Zap,
    time: 15,
    description: 'Perfect for busy days'
  },
  {
    id: 'standard',
    label: 'Standard Meal',
    icon: UtensilsCrossed,
    time: 30,
    description: 'Most common recipes'
  },
  {
    id: 'relaxed',
    label: 'Relaxed Cooking',
    icon: Coffee,
    time: 60,
    description: 'For weekend cooking'
  }
];

interface TimeSelectorProps {
  selectedTime: number;
  onTimeChange: (minutes: number) => void;
}

export default function TimeSelector({ selectedTime, onTimeChange }: TimeSelectorProps) {
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handlePresetClick = (preset: TimePreset) => {
    setActivePreset(preset.id);
    onTimeChange(preset.time);
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins > 0 ? `${mins}m` : ''}`;
  };

  return (
    <div className="space-y-8">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
        <Timer className="w-5 h-5 text-blue-500 mt-0.5" />
        <div>
          <h4 className="font-medium text-blue-900 mb-1">Primary Time Selection</h4>
          <p className="text-sm text-blue-700">
            This will be the main time used for recipe generation. Cooking method times are used as guidelines only.
          </p>
        </div>
      </div>

      {/* Time Presets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {timePresets.map((preset) => {
          const isActive = activePreset === preset.id;
          const Icon = preset.icon;

          return (
            <button
              key={preset.id}
              onClick={() => handlePresetClick(preset)}
              className={`p-4 rounded-xl border-2 transition-all ${
                isActive
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${
                  isActive ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    isActive ? 'text-emerald-600' : 'text-gray-500'
                  }`} />
                </div>
                <span className={`font-medium ${
                  isActive ? 'text-emerald-900' : 'text-gray-900'
                }`}>
                  {preset.label}
                </span>
              </div>
              <div className="space-y-1">
                <div className={`text-sm ${
                  isActive ? 'text-emerald-600' : 'text-gray-500'
                }`}>
                  {preset.description}
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full inline-flex items-center gap-1 ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <Clock className="w-3 h-3" />
                  {formatTime(preset.time)}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Custom Time Selector */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">Custom Time</h4>
          <div className="text-lg font-semibold text-emerald-600">
            {formatTime(selectedTime)}
          </div>
        </div>
        
        <div className="space-y-6">
          <input
            type="range"
            min="5"
            max="180"
            step="5"
            value={selectedTime}
            onChange={(e) => {
              setActivePreset(null);
              onTimeChange(Number(e.target.value));
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>5 min</span>
            <span>1 hour</span>
            <span>3 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}