// contactData.js

export const SERVICES_LIST = [
  "Performance Marketing",
  "SEM Experts",
  "SEO Services",
  "Social Media Marketing",
  "Website Design",
  "UX/UI Design",
  "GTM Integration",
  "CRO Optimization",
  "Content Writing",
  "Graphic Design",
  "Video Production"
];

export const FORM_FIELDS = [
  { key: 'full_name', label: 'Full Name*', type: 'text', placeholder: 'John Doe', required: true },
  { key: 'email', label: 'Email Address*', type: 'email', placeholder: 'john@example.com', required: true },
  { key: 'phone', label: 'Phone Number*', type: 'tel', placeholder: '+91 00000 00000', required: true },
  { key: 'subject', label: 'Subject*', type: 'text', placeholder: 'Inquiry Type', required: true },
  { key: 'company', label: 'Company Name', type: 'text', placeholder: 'Optional', required: false },
  { key: 'website', label: 'Website Link', type: 'url', placeholder: 'www.example.com', required: false },
];

export const SOCIAL_LINKS = ['Instagram', 'LinkedIn', 'Twitter', 'Facebook'];