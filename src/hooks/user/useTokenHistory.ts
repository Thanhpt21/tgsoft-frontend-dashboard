// hooks/token/useTokenHistory.ts
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

interface TokenHistory {
  id: number
  action: string
  description: string
  createdAt: string
  payload: any
}

interface TokenHistoryResponse {
  success: boolean
  message: string
  data: {
    data: TokenHistory[]
    total: number
    page: number
    pageCount: number
  }
}

export const useTokenHistory = (userId?: number, page?: number, limit?: number) => {
  return useQuery({
    queryKey: ['token-history', userId, page, limit],
    queryFn: async (): Promise<{ data: TokenHistory[], total: number }> => {
      if (!userId) return { data: [], total: 0 }
      
      const res = await api.get<TokenHistoryResponse>('/audit-logs/token-history', {
        params: { 
          userId,
          page: page || 1,
          limit: limit || 50
        }
      })
      return {
        data: res.data.data.data,
        total: res.data.data.total
      }
    },
    enabled: !!userId
  })
}