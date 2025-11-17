'use client'

import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Switch,
  Checkbox,
  message,
  Button,
  Row,
  Col,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useCreateUser } from '@/hooks/user/useCreateUser'
import type { UploadFile } from 'antd/es/upload/interface'

interface UserCreateModalProps {
  open: boolean
  onClose: () => void
  refetch?: () => void
}

export const UserCreateModal = ({
  open,
  onClose,
  refetch,
}: UserCreateModalProps) => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { mutateAsync, isPending } = useCreateUser()

  const onFinish = async (values: any) => {
    try {
      // Lấy file gốc để upload lên server
      const file = fileList?.[0]?.originFileObj
      const tokenAI = Number(values.tokenAI)

      // Set role to adminshop if checkbox is checked, otherwise set to user
      const role = values.isAdminShop ? 'adminshop' : 'user'

      const { isAdminShop, ...restValues } = values

      // Gửi data + file lên server
      await mutateAsync({ ...restValues, file, tokenAI, role })
      
      message.success('Tạo người dùng thành công')
      onClose()
      form.resetFields()
      setFileList([])
      refetch?.()
    } catch (error: any) {
      message.error(error?.response?.data?.message || 'Lỗi tạo user')
    }
  }

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/')
    if (!isImage) {
      message.error('Chỉ được upload file ảnh!')
      return Upload.LIST_IGNORE
    }

    const isLt5M = file.size / 1024 / 1024 < 5
    if (!isLt5M) {
      message.error('Ảnh phải nhỏ hơn 5MB!')
      return Upload.LIST_IGNORE
    }

    return false 
  }

  useEffect(() => {
    if (!open) {
      form.resetFields()
      setFileList([])
    }
  }, [open, form])

  return (
    <Modal
      title="Tạo người dùng mới"
      visible={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      width={700}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Ảnh đại diện">
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            beforeUpload={beforeUpload}
            maxCount={1}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
        </Form.Item>

        {/* Layout 2 cột */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tên"
              name="name"
              rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Email không hợp lệ' },
              ]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item 
              label="Số điện thoại" 
              name="phoneNumber"
              rules={[
                {
                  pattern: /^0[0-9]{9}$/,
                  message: 'Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số',
                },
              ]}
            >
              <Input 
                placeholder="Nhập số điện thoại (VD: 0912345678)" 
                maxLength={10}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Giới tính" name="gender">
              <Select
                allowClear
                placeholder="Chọn giới tính"
                options={[
                  { label: 'Nam', value: 'male' },
                  { label: 'Nữ', value: 'female' },
                  { label: 'Khác', value: 'other' },
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Trạng thái hoạt động"
              name="isActive"
              valuePropName="checked"
              initialValue={true}
            >
              <Switch />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item 
              label="Quyền Admin Shop" 
              name="isAdminShop" 
              valuePropName="checked"
              initialValue={false}
            >
              <Checkbox>Cấp quyền Admin Shop</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Số lượng Token AI"
              name="tokenAI"
              rules={[
                { required: true, message: 'Vui lòng nhập số lượng Token AI' },
                { 
                  type: 'number', 
                  transform: (value) => Number(value),
                  message: 'Token AI phải là số' 
                },
                {
                  validator: (_, value) => {
                    const num = Number(value)
                    if (isNaN(num) || num < 0) {
                      return Promise.reject('Token AI phải là số không âm')
                    }
                    return Promise.resolve()
                  }
                }
              ]}
            >
              <Input 
                type="number" 
                placeholder="Nhập số lượng Token AI" 
                min={0}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            block
          >
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}