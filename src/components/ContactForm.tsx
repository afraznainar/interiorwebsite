import React from 'react';
import { FormProvider, useForm, useFormValidation } from '../contexts/FormContext';
import FormInput from './form/FormInput';
import FormSelect from './form/FormSelect';
import FormTextarea from './form/FormTextarea';
import { projectTypes, budgetRanges, timelineOptions } from '../data/formOptions';
import { sendToWhatsApp } from '../services/whatsapp';

interface ContactFormProps {
  onClose: () => void;
}

function ContactFormContent({ onClose }: ContactFormProps) {
  const { state, dispatch } = useForm();
  const { validateForm } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    dispatch({ type: 'START_SUBMIT' });
    
    try {
      sendToWhatsApp(state.data);
      dispatch({ type: 'RESET_FORM' });
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      dispatch({ type: 'END_SUBMIT' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name as keyof typeof state.data, value });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            type="button"
            aria-label="Close form"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              id="name"
              name="name"
              label="Name"
              type="text"
              required
              placeholder="Your name"
              value={state.data.name}
              onChange={handleChange}
              error={state.errors.name}
            />
            
            <FormInput
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              required
              placeholder="Your phone number"
              value={state.data.phone}
              onChange={handleChange}
              error={state.errors.phone}
            />
          </div>
          
          <FormInput
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            placeholder="your@email.com"
            value={state.data.email}
            onChange={handleChange}
            error={state.errors.email}
          />

          <FormSelect
            id="projectType"
            name="projectType"
            label="Project Type"
            required
            value={state.data.projectType}
            onChange={handleChange}
            options={projectTypes}
            error={state.errors.projectType}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              id="budget"
              name="budget"
              label="Budget Range"
              value={state.data.budget}
              onChange={handleChange}
              options={budgetRanges}
              error={state.errors.budget}
            />

            <FormSelect
              id="timeline"
              name="timeline"
              label="Timeline"
              value={state.data.timeline}
              onChange={handleChange}
              options={timelineOptions}
              error={state.errors.timeline}
            />
          </div>
          
          <FormTextarea
            id="message"
            name="message"
            label="Project Details"
            required
            placeholder="Tell us about your project requirements"
            value={state.data.message}
            onChange={handleChange}
            error={state.errors.message}
          />
          
          <button
            type="submit"
            disabled={state.isSubmitting}
            className="w-full bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <FormProvider>
      <ContactFormContent {...props} />
    </FormProvider>
  );
}