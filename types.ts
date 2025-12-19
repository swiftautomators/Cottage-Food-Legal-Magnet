
export interface LegalData {
  state: string;
  cap: string;
  refrigeration: string;
  labels: string;
  privacy: string;
}

export interface FormData {
  name: string;
  state: string;
  email: string;
}

export type Status = 'idle' | 'submitting' | 'success' | 'error';
