import React, { useEffect } from 'react'
import { Modal, Form, Input, Button, message, Switch, Select } from 'antd'
import { Tenant } from '@/types/tenant.type'
import { useUpdateTenantAIConfig } from '@/hooks/tenant/useUpdateTenantAIConfig'
import { useAllPromptAIs } from '@/hooks/promptAI/useAllPromptAIs'

interface AIConfigModalProps {
  visible: boolean
  onClose: () => void
  onSuccess?: () => void
  tenant: Tenant | null
}

const AIConfigModal: React.FC<AIConfigModalProps> = ({ visible, onClose, onSuccess, tenant }) => {
  const [form] = Form.useForm()
  const { mutateAsync: updateAIConfig } = useUpdateTenantAIConfig()
  const { data: promptAIs, isLoading: loadingPrompts } = useAllPromptAIs()

  // Khi modal mở và có tenant, set các giá trị trong form
    useEffect(() => {
    if (visible && tenant) {
      const formValues = {
        aiChatEnabled: tenant.aiChatEnabled,
        aiProvider: tenant.aiProvider,
        aiModel: tenant.aiModel,
        aiSystemPromptId: tenant.aiSystemPromptId,
        aiTemperature: tenant.aiTemperature,
        aiMaxTokens: tenant.aiMaxTokens,
        aiAutoReplyDelay: tenant.aiAutoReplyDelay,
        apiKey: tenant.apiKey,
      }
      
      console.log('Setting form values:', formValues)
      form.setFieldsValue(formValues)
    }
  }, [visible, tenant, form, promptAIs])

  // Reset form khi đóng modal
  useEffect(() => {
    if (!visible) {
      form.resetFields()
    }
  }, [visible, form])

  // Hàm gửi dữ liệu và cập nhật cấu hình AI
  const handleSubmit = async () => {
    if (!tenant) {
      message.error('Không có thông tin cửa hàng!')
      return
    }
    try {
      const values = await form.validateFields()

      const aiConfig = {
        aiChatEnabled: values.aiChatEnabled,
        aiProvider: values.aiProvider,
        aiModel: values.aiModel,
        aiSystemPromptId: values.aiSystemPromptId,
        aiTemperature: values.aiTemperature,
        aiMaxTokens: values.aiMaxTokens,
        aiAutoReplyDelay: values.aiAutoReplyDelay,
        apiKey: values.apiKey,
      }
      
      // Call API để update cấu hình AI
      await updateAIConfig({ tenantId: tenant.id, aiConfig })

      message.success('Cập nhật cấu hình AI thành công!')
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
      title={`Cấu hình AI cho cửa hàng: ${tenant?.name || ''}`}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Hủy
        </Button>,
        <Button key="save" type="primary" onClick={handleSubmit}>
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {/* Bật/Tắt AI Chat */}
        <Form.Item
          name="aiChatEnabled"
          label="Bật/tắt AI Chat"
          valuePropName="checked"
          rules={[{ required: true, message: 'Vui lòng chọn trạng thái AI chat' }]}
        >
          <Switch />
        </Form.Item>

        {/* Provider AI */}
        <Form.Item
          name="aiProvider"
          label="Provider AI"
          rules={[{ required: true, message: 'Vui lòng nhập provider AI' }]}
        >
          <Input placeholder="Ví dụ: openai, gemini, claude" />
        </Form.Item>

        {/* Model AI */}
        <Form.Item
          name="aiModel"
          label="Model AI"
          rules={[{ required: true, message: 'Vui lòng nhập tên model AI' }]}
        >
          <Input placeholder="Ví dụ: gpt-4o-mini" />
        </Form.Item>

        {/* System Prompt Selection */}
        <Form.Item
          name="aiSystemPromptId"
          label="System Prompt"
        >
          <Select
            placeholder="Chọn system prompt"
            loading={loadingPrompts}
            allowClear
            showSearch
            optionFilterProp="label"
            filterOption={(input, option) => {
              const label = option?.label as string | undefined;
              return (label ?? '').toLowerCase().includes(input.toLowerCase());
            }}
          >
            {promptAIs?.map((prompt: any) => (
              <Select.Option key={prompt.id} value={prompt.id} label={prompt.name}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{prompt.name}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {prompt.text.length > 100 
                      ? `${prompt.text.substring(0, 100)}...` 
                      : prompt.text
                    }
                  </div>
                </div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* Temperature (Creativity level) */}
        <Form.Item
          name="aiTemperature"
          label="Mức độ sáng tạo (0-2)"
          rules={[
            { required: true, message: 'Vui lòng nhập mức độ sáng tạo' },
            { type: 'number', min: 0, max: 2, message: 'Mức độ sáng tạo phải nằm trong khoảng từ 0 đến 2' },
          ]}
        >
          <Input type="number" placeholder="Mức độ sáng tạo" step="0.1" />
        </Form.Item>

        {/* Max Tokens */}
        <Form.Item
          name="aiMaxTokens"
          label="Số tokens tối đa mỗi phản hồi"
          rules={[{ required: true, message: 'Vui lòng nhập số tokens tối đa' }]}
        >
          <Input type="number" placeholder="Số tokens tối đa" />
        </Form.Item>

        {/* Auto Reply Delay */}
        <Form.Item
          name="aiAutoReplyDelay"
          label="Độ trễ tự động phản hồi (ms)"
          rules={[{ required: true, message: 'Vui lòng nhập độ trễ tự động phản hồi' }]}
        >
          <Input type="number" placeholder="Độ trễ tự động" />
        </Form.Item>

        {/* API Key */}
        <Form.Item
          name="apiKey"
          label="API Key"
          rules={[{ required: true, message: 'Vui lòng nhập API key' }]}
        >
          <Input.Password placeholder="Nhập API Key" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AIConfigModal