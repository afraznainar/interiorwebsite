import React from 'react';
import { FormField } from '../../types/form';

interface FormSelectProps extends FormField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormSelect({
  id,
  name,
  label,
  required,
  value,
  onChange,
  options = []
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}