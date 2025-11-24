// components/TokenHistoryModal.tsx
'use client'

import { Modal, Table, Tag, Timeline, Tabs, Descriptions } from 'antd'

import type { User } from '@/types/user.type'
import { useTokenHistory } from '@/hooks/user/useTokenHistory'

interface TokenHistoryModalProps {
  open: boolean
  onClose: () => void
  user: User | null
}

interface TokenHistoryItem {
  id: number
  action: string
  description: string
  createdAt: string
  payload?: {
    oldTokenAI?: number
    newTokenAI?: number
    transferredFixedTokens?: number
    tenantId?: number
    tenantName?: string
    [key: string]: any
  }
}

export const TokenHistoryModal = ({ open, onClose, user }: TokenHistoryModalProps) => {
  const { data: historyData, isLoading } = useTokenHistory(user?.id)
  const history = historyData?.data || []

  const columns = [
    {
      title: 'Thời gian',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => new Date(date).toLocaleString('vi-VN')
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (action: string) => {
        const config: any = {
          'MONTHLY_TOKEN_RENEW': { color: 'green', text: 'Renew Tháng' },
          'FIXED_TOKENS_TRANSFER': { color: 'orange', text: 'Chuyển Token Dự Phòng' },
          'FIXED_TOKENS_TRANSFER_REALTIME': { color: 'red', text: 'Chuyển Token Real-time' }
        }
        const cfg = config[action] || { color: 'default', text: action }
        return <Tag color={cfg.color}>{cfg.text}</Tag>
      }
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: 300,
      render: (desc: string) => (
        <div className="max-w-xs truncate" title={desc}>
          {desc}
        </div>
      )
    },
    {
      title: 'Chi tiết',
      key: 'details',
      render: (_: any, record: TokenHistoryItem) => (
        <div className="text-xs">
          {record.payload?.oldTokenAI !== undefined && (
            <div>Token cũ: {record.payload.oldTokenAI}</div>
          )}
          {record.payload?.newTokenAI !== undefined && (
            <div>Token mới: {record.payload.newTokenAI}</div>
          )}
          {record.payload?.transferredFixedTokens && (
            <div>Đã chuyển: {record.payload.transferredFixedTokens}</div>
          )}
        </div>
      )
    }
  ]

  // Sửa Timeline component - cách cũ
  const TimelineContent = () => (
    <Timeline>
      {history.map((item: TokenHistoryItem) => (
        <Timeline.Item 
          key={item.id}
          color={
            item.action === 'MONTHLY_TOKEN_RENEW' ? 'green' : 
            item.action === 'FIXED_TOKENS_TRANSFER' ? 'orange' : 'red'
          }
        >
          <div>
            <div className="font-medium">
              {item.action === 'MONTHLY_TOKEN_RENEW' ? '🔄 Renew Token' : 
               item.action === 'FIXED_TOKENS_TRANSFER' ? '🔄 Chuyển Token Dự Phòng' : 
               '⚡ Chuyển Token Real-time'}
            </div>
            <div className="text-sm text-gray-600">{item.description}</div>
            <div className="text-xs text-gray-500">
              {new Date(item.createdAt).toLocaleString('vi-VN')}
            </div>
            {item.payload && (
              <div className="text-xs mt-1">
                {item.payload.oldTokenAI !== undefined && (
                  <span>Token cũ: {item.payload.oldTokenAI} → </span>
                )}
                {item.payload.newTokenAI !== undefined && (
                  <span>Token mới: {item.payload.newTokenAI}</span>
                )}
                {item.payload.transferredFixedTokens && (
                  <span> (Chuyển: {item.payload.transferredFixedTokens})</span>
                )}
              </div>
            )}
          </div>
        </Timeline.Item>
      )).reverse()}
    </Timeline>
  )

  const items = [
    {
      key: 'timeline',
      label: 'Dòng thời gian',
      children: <TimelineContent />
    },
    {
      key: 'table',
      label: 'Bảng dữ liệu',
      children: (
        <Table
          columns={columns}
          dataSource={history}
          rowKey="id"
          loading={isLoading}
          pagination={false}
          size="small"
        />
      )
    },
    {
      key: 'summary',
      label: 'Tổng quan',
      children: (
        <Descriptions bordered size="small" column={2}>
          <Descriptions.Item label="Tổng số renew">
            {history.filter((h: TokenHistoryItem) => h.action === 'MONTHLY_TOKEN_RENEW').length || 0}
          </Descriptions.Item>
          <Descriptions.Item label="Tổng số chuyển token">
            {history.filter((h: TokenHistoryItem) => h.action.includes('FIXED_TOKENS_TRANSFER')).length || 0}
          </Descriptions.Item>
          <Descriptions.Item label="Lần renew gần nhất">
            {history.find((h: TokenHistoryItem) => h.action === 'MONTHLY_TOKEN_RENEW') ? 
              new Date(history.filter((h: TokenHistoryItem) => h.action === 'MONTHLY_TOKEN_RENEW')[0]?.createdAt).toLocaleDateString('vi-VN') : 
              'Chưa có'
            }
          </Descriptions.Item>
          <Descriptions.Item label="Lần chuyển gần nhất">
            {history.find((h: TokenHistoryItem) => h.action.includes('FIXED_TOKENS_TRANSFER')) ? 
              new Date(history.filter((h: TokenHistoryItem) => h.action.includes('FIXED_TOKENS_TRANSFER'))[0]?.createdAt).toLocaleDateString('vi-VN') : 
              'Chưa có'
            }
          </Descriptions.Item>
        </Descriptions>
      )
    }
  ]

  return (
    <Modal
      title={`📊 Lịch sử Token - ${user?.name}`}
      open={open}
      onCancel={onClose}
      footer={null}
      width={900}
    >
      <Tabs items={items} />
    </Modal>
  )
}