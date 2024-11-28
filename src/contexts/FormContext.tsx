import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FormData } from '../types/form';
import { validateEmail, validatePhone, validateRequired } from '../utils/formValidation';

interface FormState {
  data: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  isSubmitting: boolean;
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormData; value: string }
  | { type: 'SET_ERRORS'; errors: FormState['errors'] }
  | { type: 'START_SUBMIT' }
  | { type: 'END_SUBMIT' }
  | { type: 'RESET_FORM' };

const initialState: FormState = {
  data: {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  },
  errors: {},
  isSubmitting: false
};

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
} | null>(null);

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: '' }
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors, isSubmitting: false };
    case 'START_SUBMIT':
      return { ...state, isSubmitting: true };
    case 'END_SUBMIT':
      return { ...state, isSubmitting: false };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}

export function useFormValidation() {
  const { state, dispatch } = useForm();

  const validateForm = (): boolean => {
    const errors: FormState['errors'] = {};

    if (!validateRequired(state.data.name)) {
      errors.name = 'Name is required';
    }

    if (!validateEmail(state.data.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!validatePhone(state.data.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!validateRequired(state.data.projectType)) {
      errors.projectType = 'Project type is required';
    }

    if (!validateRequired(state.data.message)) {
      errors.message = 'Project details are required';
    }

    dispatch({ type: 'SET_ERRORS', errors });
    return Object.keys(errors).length === 0;
  };

  return { validateForm };
}