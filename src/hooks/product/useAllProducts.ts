import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

interface UseAllProductsProps {
  tenantId: number
  search?: string
}

export const useAllProducts = ({ tenantId, search }: UseAllProductsProps) => {
  return useQuery({
    queryKey: ['allProducts', tenantId, search], 
    queryFn: async () => {
      const res = await api.get(`/products/all/list/${tenantId}`, {
        params: { search },
      })
      return res.data.data
    },
  })
}
