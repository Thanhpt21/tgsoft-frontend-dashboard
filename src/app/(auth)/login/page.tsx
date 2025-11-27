// app/(auth)/login/page.tsx
'use client'

import { useLogin } from '@/hooks/auth/useLogin'
import { Form, Input, Button } from 'antd'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface LoginFormValues {
  email: string
  password: string
}

export default function LoginPage() {
  const loginMutation = useLogin()
  const [form] = Form.useForm<LoginFormValues>()

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen w-screen flex items-center justify-center md:p-4 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="w-full h-full md:h-auto md:max-w-2xl bg-white md:rounded-3xl shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Content Container */}
        <div className="flex-1 flex flex-col p-6 md:p-16 md:pt-8">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Đăng nhập
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Đăng nhập để tiếp tục trải nghiệm
            </p>
          </div>

          {/* Form */}
          <Form form={form} layout="vertical" onFinish={onSubmit} className="space-y-4 w-full flex-1">
            <Form.Item
              name="email"
              label={<span className="text-sm font-semibold text-gray-700">Email</span>}
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Email không hợp lệ' },
              ]}
              className="mb-4"
            >
              <Input 
                type="email" 
                placeholder="you@example.com"
                className="h-12 md:h-14 text-base rounded-lg md:rounded-xl border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-colors"
                prefix={
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                }
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="text-sm font-semibold text-gray-700">Mật khẩu</span>}
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu' },
                { min: 6, message: 'Mật khẩu ít nhất 6 ký tự' },
              ]}
              className="mb-4"
            >
              <Input.Password 
                placeholder="••••••••"
                className="h-12 md:h-14 text-base rounded-lg md:rounded-xl border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-colors"
                prefix={
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
              />
            </Form.Item>

            <Form.Item className="mb-0 pt-4">
              <Button
                type="primary"
                htmlType="submit"
                loading={loginMutation.isPending}
                className="w-full h-12 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
              >
                {loginMutation.isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </motion.div>
  )
}