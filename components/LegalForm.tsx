
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { STATES_LIST } from '../constants';
import { Status } from '../types';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  state: z.string().min(1, "Please select your state"),
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export const LegalForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting');
    try {
      const response = await fetch('https://n8n.srv1020587.hstgr.cloud/webhook/ebed810f-f36e-4636-a15f-5169a10ecdf7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Oops! Something went wrong. Please try again or check your connection.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center border-t-8 border-green-500"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Roadmap is on its way!</h3>
        <p className="text-gray-600 mb-6">Check your inbox. We've sent your 2025 legal guide to the kitchen.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-orange-600 font-semibold hover:underline"
        >
          Send another one?
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            {...register('name')}
            placeholder="Jane Baker"
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-orange-500 outline-none transition-all`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">State</label>
          <div className="relative">
            <select
              {...register('state')}
              className={`w-full px-4 py-3 rounded-xl appearance-none border ${errors.state ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-orange-500 outline-none transition-all`}
            >
              <option value="">Select State</option>
              {STATES_LIST.map(state => <option key={state} value={state}>{state}</option>)}
            </select>
          </div>
          {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input
            {...register('email')}
            type="email"
            placeholder="jane@cookies.com"
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-orange-500 outline-none transition-all`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {status === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Securing Roadmap...
            </>
          ) : (
            'Send My Legal Roadmap'
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          "We’ll never share your data. Your privacy is our priority."
        </p>
      </form>
    </div>
  );
};
