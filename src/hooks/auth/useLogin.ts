// src/hooks/auth/useLogin.ts
'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login, LoginBody } from '@/lib/auth/login'
import { useRouter, useSearchParams } from 'next/navigation'
import { message } from 'antd'

interface LoginResponse {
  success: boolean
  message: string
  access_token: string
  user: {
    id: number
    name: string
    email: string
    role: string
    phone: string | null
    gender: string | null
    type_account: string
    isActive: boolean
  }
}

const setAuthData = (data: LoginResponse) => {
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('user', JSON.stringify(data.user))
}

const clearAuth = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('user')
}

export const useLogin = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryClient = useQueryClient()

  return useMutation<LoginResponse, Error, LoginBody>({
    mutationFn: login,

    onSuccess: (data) => {
      // 1. Kiểm tra role
      if (data.user.role !== 'admin') {
        clearAuth()
        message.error('Bạn không có quyền quản trị viên.')
        return
      }

      // 2. Lưu auth
      setAuthData(data)

      // 3. Invalidate cache
      queryClient.invalidateQueries({ queryKey: ['current-user'] })

      // 4. Redirect
      const returnUrl = searchParams.get('returnUrl')
      const redirectTo = returnUrl && returnUrl.startsWith('/') 
        ? decodeURIComponent(returnUrl) 
        : '/admin'

      message.success('Đăng nhập thành công!')
      router.push(redirectTo)
    },

    onError: (error: any) => {
      const msg = error?.response?.data?.message || 'Đăng nhập thất bại!'
      message.error(msg)
    },
  })
}