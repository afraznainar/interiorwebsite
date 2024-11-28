import React from 'react';
import { FormField } from '../../types/form';
import FormError from './FormError';

interface FormInputProps extends FormField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function FormInput({
  id,
  name,
  label,
  type,
  required,
  placeholder,
  value,
  onChange,
  error
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? 'border-red-300' : 'border-gray-300'
        } focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <FormError error={error} />
    </div>
  );
}