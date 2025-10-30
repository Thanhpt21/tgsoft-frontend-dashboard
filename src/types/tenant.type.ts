export interface Tenant {
  id: number
  name: string
  slug: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  // ✅ Các field về giới hạn và sử dụng
  usedAccounts: number
  usedSKUs: number
  currentConcurrentUsers: number
  maxAccounts: number
  maxSKUs: number
  maxConcurrentUsers: number
  expirationDate?: string
}

export interface TenantResponse {
  data: Tenant[]
  total: number
  page: number
  pageCount: number
}