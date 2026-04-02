export interface ContactFormData {
  name: string;
  phone: string;
  visaType: string;
  message: string;
}

export function validateContactForm(data: any): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }



  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length < 5) {
    errors.phone = 'Valid phone number is required';
  }

  if (!data.visaType || typeof data.visaType !== 'string' || data.visaType.trim().length === 0) {
    errors.visaType = 'Visa type is required';
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 2) {
    errors.message = 'Message must be at least 2 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
