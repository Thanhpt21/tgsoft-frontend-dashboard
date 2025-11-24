'use client'

import { Table, Tag, Space, Tooltip, Input, Button, Modal, message } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { EditOutlined, DeleteOutlined, HistoryOutlined } from '@ant-design/icons'
import { useUsers } from '@/hooks/user/useUsers'
import { useDeleteUser } from '@/hooks/user/useDeleteUser'
import { useState } from 'react'
import { UserCreateModal } from './UserCreateModal'
import { UserUpdateModal } from './UserUpdateModal'
import { TokenHistoryModal } from './TokenHistoryModal'

import type { User } from '@/types/user.type'

export default function UserTable() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [openHistory, setOpenHistory] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const { data, isLoading, refetch } = useUsers({ page, limit: 10, search })
  const { mutateAsync: deleteUser, isPending: isDeleting } = useDeleteUser()

  const columns: ColumnsType<User> = [
    {
      title: 'STT',
      key: 'index',
      width: 60,
      render: (_text, _record, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (active: boolean) => (
        <Tag color={active ? 'success' : 'error'}>
          {active ? 'Kích hoạt' : 'Bị khóa'}
        </Tag>
      ),
    },
    {
      title: 'Số lượng Token AI',
      dataIndex: 'tokenAI',
      key: 'tokenAI',
      render: (tokenAI: number) => <span>{tokenAI}</span>,
    },
    {
      title: 'Token Reset mỗi tháng',
      dataIndex: 'defaultTokens',
      key: 'defaultTokens',
      render: (defaultTokens: number) => (
        <Tooltip title="Token renew hàng tháng">
          <Tag color="blue">{defaultTokens}</Tag>
        </Tooltip>
      ),
    },
    {
      title: 'Token dự phòng',
      dataIndex: 'fixedTokens',
      key: 'fixedTokens',
      render: (fixedTokens: number) => (
        <Tooltip title="Token không bị reset">
          <Tag color="green">{fixedTokens}</Tag>
        </Tooltip>
      ),
    },
    {
      title: 'ID Cửa Hàng',
      dataIndex: 'tenantId', 
      key: 'tenantId',
      render: (tenantId: number) => <span>{tenantId}</span>, 
    },
    {
      title: 'Hành động',
      key: 'action',
      width: 180,
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Lịch sử Token">
            <HistoryOutlined
              style={{ color: '#722ed1', cursor: 'pointer' }}
              onClick={() => {
                setSelectedUser(record)
                setOpenHistory(true)
              }}
            />
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <EditOutlined
              style={{ color: '#1890ff', cursor: 'pointer' }}
              onClick={() => {
                setSelectedUser(record)
                setOpenUpdate(true)
              }}
            />
          </Tooltip>
          <Tooltip title="Xóa">
            <DeleteOutlined
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => {
                Modal.confirm({
                  title: 'Xác nhận xoá người dùng',
                  content: `Bạn có chắc chắn muốn xoá người dùng "${record.name}" không?`,
                  okText: 'Xoá',
                  okType: 'danger',
                  cancelText: 'Hủy',
                  onOk: async () => {
                    try {
                      await deleteUser(record.id)
                      message.success('Xoá người dùng thành công')
                      refetch?.()
                    } catch (error: any) {
                      message.error(error?.response?.data?.message || 'Xoá thất bại')
                    }
                  },
                })
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  const handleSearch = () => {
    setPage(1)
    setSearch(inputValue)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Tìm kiếm theo tên hoặc email..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={handleSearch}
            allowClear
            className="w-[300px]"
          />
          <Button type="primary" onClick={handleSearch}>
            Tìm kiếm
          </Button>
        </div>

        <Button type="primary" onClick={() => setOpenCreate(true)}>
          Thêm mới
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={(data?.data || []).filter((user: User) => user.role !== 'admin')}
        rowKey="id"
        loading={isLoading}
        pagination={{
          total: (data?.data || []).filter((user: User) => user.role !== 'admin').length,
          current: page,
          pageSize: 10,
          onChange: (p) => setPage(p),
        }}
      />

      <UserCreateModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        refetch={refetch} 
      />

      <UserUpdateModal
        open={openUpdate}
        onClose={() => setOpenUpdate(false)}
        user={selectedUser}
        refetch={refetch}
      />

      <TokenHistoryModal
        open={openHistory}
        onClose={() => setOpenHistory(false)}
        user={selectedUser}
      />
    </div>
  )
}