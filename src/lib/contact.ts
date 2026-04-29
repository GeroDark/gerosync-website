export type ContactFormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export const initialContactFormState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  message: ""
};

export async function submitContactForm(data: ContactFormState) {
  // Future integration point: connect this payload to email, CRM, or an internal API route.
  return {
    ok: true,
    data
  };
}
