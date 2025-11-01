import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

interface UseAllProductsProps {
  search?: string
}

export const useAllProducts = ({ search }: UseAllProductsProps) => {
  return useQuery({
    queryKey: ['allProducts', search], 
    queryFn: async () => {
      const res = await api.get(`/products/all/list`, {
        params: { search },
      })
      return res.data.data
    },
  })
}
