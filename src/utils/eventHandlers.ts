import { ChangeEvent, FormEvent } from 'react';

export type FormChangeHandler = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => void;

export type FormSubmitHandler = (e: FormEvent<HTMLFormElement>) => void;

export const createChangeHandler = (
  onChange: (field: string, value: string) => void
): FormChangeHandler => {
  return (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
};

export const createSubmitHandler = (
  onSubmit: () => void
): FormSubmitHandler => {
  return (e) => {
    e.preventDefault();
    onSubmit();
  };
};