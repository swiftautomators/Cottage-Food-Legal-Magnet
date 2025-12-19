
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STATE_LEGAL_DATA, STATES_LIST } from '../constants';
import { ChevronDown, ShieldCheck, DollarSign, Snowflake } from 'lucide-react';

export const StateQuickStats: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('Texas');
  const data = STATE_LEGAL_DATA[selectedState] || STATE_LEGAL_DATA['Other'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-orange-100 max-w-lg w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">Quick 2025 Fact:</h3>
          <div className="relative inline-block">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="appearance-none bg-orange-50 border border-orange-200 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-2 pr-10 cursor-pointer transition-colors hover:bg-orange-100"
            >
              {STATES_LIST.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-orange-600">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedState}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
              <div className="p-2 bg-orange-200 rounded-lg text-orange-700">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-orange-600 tracking-wider">Revenue Cap</p>
                <p className="text-sm font-bold text-gray-800">{data.cap}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
              <div className="p-2 bg-blue-200 rounded-lg text-blue-700">
                <Snowflake className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-blue-600 tracking-wider">Refrigeration</p>
                <p className="text-sm font-bold text-gray-800 leading-tight">{data.refrigeration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl md:col-span-2">
              <div className="p-2 bg-green-200 rounded-lg text-green-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-green-600 tracking-wider">Privacy & Labels</p>
                <p className="text-sm font-bold text-gray-800">{data.labels}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
