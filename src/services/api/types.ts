export interface User {
  id: string;
  name: string | null;
  email: string;
  imageUrl?: string | null;
  preferences?: object;
}

export interface APIError {
  message: string;
  status: number;
}
