export interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface FormProps {
  formData: FormData;
  onSubmit: (data: FormData) => void;
  onChange: (field: string, value: string) => void;
  onClose: () => void;
}