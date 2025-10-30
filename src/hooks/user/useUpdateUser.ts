// useUpdateUser.ts
import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async ({
      id,
      data,
      file,
    }: {
      id: number | string
      data: any
      file?: File
    }) => {
      if (file) {
        const formData = new FormData()
        
        // 👇 Append với đúng kiểu dữ liệu
        Object.keys(data).forEach(key => {
          if (data[key] !== undefined && data[key] !== null) {
            // Convert boolean và number sang string cho FormData
            const value = typeof data[key] === 'boolean' || typeof data[key] === 'number'
              ? String(data[key])
              : data[key]
            formData.append(key, value)
          }
        })
        
        formData.append('file', file)
        
        const res = await api.put(`/users/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return res.data.data
      } else {
        // Không có file thì gửi JSON bình thường
        const res = await api.put(`/users/${id}`, data)
        return res.data.data
      }
    },
  })
}