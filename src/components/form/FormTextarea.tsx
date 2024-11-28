import React from 'react';
import { FormField } from '../../types/form';

interface FormTextareaProps extends FormField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export default function FormTextarea({
  id,
  name,
  label,
  required,
  placeholder,
  value,
  onChange,
  rows = 4
}: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}