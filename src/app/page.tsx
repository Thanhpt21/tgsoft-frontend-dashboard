'use client'

import { useCurrent } from '@/hooks/auth/useCurrent'

export default function Page() {
  const { data: user, isLoading, isError, error } = useCurrent()

  if (isLoading) return <p>Đang tải thông tin người dùng...</p>

  if (isError) return <p>Lỗi: {(error as Error).message}</p>

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-red-500">Chào mừng, {user?.name}!</h1>
      <p>Email: {user?.email}</p>
      <p>Vai trò: {user?.role}</p>
      {/* Hiển thị các thông tin khác nếu muốn */}
    </div>
  )
}
