

export interface User {
  id: number
  name: string
  email: string
  password: string
  role: string   
  phone: string | null
  gender: 'male' | 'female' | 'other' | null 
  avatar: string | null; 
  isActive: boolean
  type_account: 'normal' | 'google' | 'facebook' | string
  tokenAI: number;
  defaultTokens: number; 
  fixedTokens: number;   
  createdAt: string
  updatedAt: string
}
