import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { handleFormChange, validatePhoneNumber } from '../utils/formHandlers';

export default function CallbackRequest() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    
    // Format the WhatsApp message
    const message = encodeURIComponent(`Callback Request\nPhone: ${phoneNumber}`);
    const whatsappUrl = `https://wa.me/918494999594?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setShowSuccess(true);
    setPhoneNumber('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <Phone className="mx-auto h-12 w-12 text-gray-900" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Request a Callback</h2>
          <p className="mt-2 text-sm text-gray-600">
            Leave your number and we'll call you back within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              id="callback-phone"
              name="phone"
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => handleFormChange(e, setPhoneNumber)}
              className={`w-full px-4 py-3 rounded-lg border ${
                error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'
              } focus:border-transparent focus:ring-2`}
              placeholder="Enter your phone number"
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'phone-error' : undefined}
            />
            {error && (
              <p id="phone-error" className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Request Callback
          </button>
        </form>

        {showSuccess && (
          <div className="mt-4 p-4 rounded-lg bg-green-50 text-green-800" role="alert">
            Thank you! We'll call you back soon.
          </div>
        )}
      </div>
    </div>
  );
}