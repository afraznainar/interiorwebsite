import { ChangeEvent, FormEvent } from 'react';

export type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export const handleFormChange = (
  e: FormChangeEvent,
  setter: (value: string) => void
) => {
  setter(e.target.value);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};