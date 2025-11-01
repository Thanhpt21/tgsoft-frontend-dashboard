import React, { useState, useEffect } from 'react'
import { Modal, Input, Form, Button, message, DatePicker } from 'antd'
import type { Tenant } from '@/types/tenant.type'
import { useUpdateTenantTierLimits } from '@/hooks/tenant/useUpdateTenantTierLimits'
import { useAllProducts } from '@/hooks/product/useAllProducts'
import { useUsersOfTenant } from '@/hooks/user-tenant-role/useUserOfTenant'
import dayjs from 'dayjs'

interface StoreTierModalProps {
  visible: boolean
  onClose: () => void
  onSuccess?: () => void // ✅ Callback khi update thành công
  tenant: Tenant | null
}

const StoreTierModal: React.FC<StoreTierModalProps> = ({ visible, onClose, onSuccess, tenant }) => {
  const [form] = Form.useForm()

  // ✅ Sử dụng hook, truyền tenantId từ tenant
  const { data: allProducts, isLoading: loadingProducts } = useAllProducts({ search: '' })
  const { data: users, isLoading: loadingUsers, refetch } = useUsersOfTenant(tenant?.id || 0)
    const userList = Array.isArray(users) ? users : users?.data || []
  const currentAccountCount = userList.length
  
  const { mutateAsync: updateTierLimits, isPending } = useUpdateTenantTierLimits()

  // ✅ Reset form với giá trị từ tenant khi modal mở
  useEffect(() => {
    if (visible && tenant) {
      console.log('Expiration Date:', tenant.expirationDate);
      form.setFieldsValue({
        maxAccounts: tenant.maxAccounts,
        maxSKUs: tenant.maxSKUs,
        maxConcurrentUsers: tenant.maxConcurrentUsers,
         expirationDate: tenant.expirationDate ? dayjs(tenant.expirationDate) : null,
      })
    }
  }, [visible, tenant, form])

  // Lấy số lượng SKU từ tất cả sản phẩm
  console.log('All Products:', allProducts);
  const numberOfSKUs = allProducts?.length || 0


  const handleSubmit = async () => {
    if (!tenant) {
      message.error('Không có thông tin cửa hàng!')
      return
    }

    try {
      const values = await form.validateFields()
      
      
      // ✅ Convert string sang number
      const limits = {
        maxAccounts: Number(values.maxAccounts),
        maxSKUs: Number(values.maxSKUs),
        maxConcurrentUsers: Number(values.maxConcurrentUsers),
        expirationDate: values.expirationDate ? values.expirationDate.toISOString() : null,
      }

      await updateTierLimits({
        tenantId: tenant.id,
        limits,
      })

      message.success('Cập nhật giới hạn thành công!')
      onSuccess?.()
      onClose()
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Cập nhật thất bại'
      message.error(errorMessage)
    }
  }

  const handleCancel = () => {
    form.resetFields()
    onClose()
  }

  return (
    <Modal
      title={`Cài đặt phân bậc cửa hàng: ${tenant?.name || ''}`}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel} disabled={isPending}>
          Hủy
        </Button>,
        <Button key="save" type="primary" loading={isPending} onClick={handleSubmit}>
          Lưu
        </Button>,
      ]}
    >
      {tenant && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Tài khoản đã dùng:</span>
              <span className="ml-2 font-semibold">{currentAccountCount}/{tenant.maxAccounts}</span>
            </div>
            <div>
              <span className="text-gray-500">Product SKU đã dùng:</span>
              <span className="ml-2 font-semibold">{numberOfSKUs}/{tenant.maxSKUs}</span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">User đang truy cập:</span>
              <span className="ml-2 font-semibold">{tenant.currentConcurrentUsers}/{tenant.maxConcurrentUsers}</span>
            </div>
          </div>
        </div>
      )}

      <Form form={form} layout="vertical">
        <Form.Item
          name="maxAccounts"
          label="Giới hạn Số lượng tài khoản"
          rules={[
            { required: true, message: 'Vui lòng nhập số lượng tài khoản' },
            { 
              validator: (_, value) => {
                const num = Number(value)
                if (!value || isNaN(num)) {
                  return Promise.reject('Vui lòng nhập số hợp lệ')
                }
                if (num < 1) {
                  return Promise.reject('Số lượng phải lớn hơn 0')
                }
                if (tenant && num < tenant.usedAccounts) {
                  return Promise.reject(`Phải lớn hơn hoặc bằng số đang dùng (${tenant.usedAccounts})`)
                }
                return Promise.resolve()
              }
            }
          ]}
        >
          <Input type="number" placeholder="Số lượng tài khoản" min={1} />
        </Form.Item>
        <Form.Item
          name="maxSKUs"
          label="Giới hạn SKU sản phẩm"
          rules={[
            { required: true, message: 'Vui lòng nhập giới hạn SKU' },
            { 
              validator: (_, value) => {
                const num = Number(value)
                if (!value || isNaN(num)) {
                  return Promise.reject('Vui lòng nhập số hợp lệ')
                }
                if (num < 1) {
                  return Promise.reject('Số lượng phải lớn hơn 0')
                }
                if (tenant && num < tenant.usedSKUs) {
                  return Promise.reject(`Phải lớn hơn hoặc bằng số đang dùng (${tenant.usedSKUs})`)
                }
                return Promise.resolve()
              }
            }
          ]}
        >
          <Input type="number" placeholder="Giới hạn SKU sản phẩm" min={1} />
        </Form.Item>
        <Form.Item
          name="maxConcurrentUsers"
          label="Giới hạn người dùng truy cập đồng thời"
          rules={[
            { required: true, message: 'Vui lòng nhập số người dùng' },
            { 
              validator: (_, value) => {
                const num = Number(value)
                if (!value || isNaN(num)) {
                  return Promise.reject('Vui lòng nhập số hợp lệ')
                }
                if (num < 1) {
                  return Promise.reject('Số lượng phải lớn hơn 0')
                }
                if (tenant && num < tenant.currentConcurrentUsers) {
                  return Promise.reject(`Phải lớn hơn hoặc bằng số đang truy cập (${tenant.currentConcurrentUsers})`)
                }
                return Promise.resolve()
              }
            }
          ]}
        >
          <Input type="number" placeholder="Giới hạn người dùng truy cập đồng thời" min={1} />
        </Form.Item>
         <Form.Item
          name="expirationDate"
          label="Ngày hết hạn"
          rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn' }]}
        >
          <DatePicker 
            style={{ width: '100%' }} 
            format="YYYY-MM-DD" 
            placeholder="Chọn ngày hết hạn" 
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default StoreTierModal
