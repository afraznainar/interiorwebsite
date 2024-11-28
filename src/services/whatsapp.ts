import { FormData } from '../types/form';
import { projectTypes, budgetRanges, timelineOptions } from '../data/formOptions';

const WHATSAPP_NUMBER = '918494999594';

const getOptionLabel = (options: Array<{ value: string; label: string }>, value: string) => {
  return options.find(option => option.value === value)?.label || value;
};

export const sendToWhatsApp = (formData: FormData) => {
  const projectType = getOptionLabel(projectTypes, formData.projectType);
  const budget = formData.budget ? getOptionLabel(budgetRanges, formData.budget) : 'Not specified';
  const timeline = formData.timeline ? getOptionLabel(timelineOptions, formData.timeline) : 'Not specified';

  const message = `*New Project Enquiry*

*Contact Details*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Project Information*
Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}

*Project Details*
${formData.message}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};