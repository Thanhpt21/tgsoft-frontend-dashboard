import { Modal, Avatar, Tag, Spin, Popconfirm, message, Button, Form, Select, Alert } from 'antd'
import { UserOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useUsersOfTenant } from '@/hooks/user-tenant-role/useUserOfTenant'
import { useRemoveRoleFromTenant } from '@/hooks/user-tenant-role/useRemoveRoleFromTenant'
import { useAddRoleToTenant } from '@/hooks/user-tenant-role/useAddRoleToTenant'
import { useAllUsers } from '@/hooks/user/useAllUsers'
import { useAllRoles } from '@/hooks/role/useAllRoles'
import { UserRoleInfo } from '@/types/user-tenant-role.type'
import { useState } from 'react'
import { useTenantOne } from '@/hooks/tenant/useTenantOne'
import { useUpdateUser } from '@/hooks/user/useUpdateUser'
import { useQueryClient } from '@tanstack/react-query'

interface UserListModalProps {
  tenantId: number | null
  visible: boolean
  onClose: () => void
}

const UserListModalOfTenant: React.FC<UserListModalProps> = ({ tenantId, visible, onClose }) => {
  const queryClient = useQueryClient()
  const { data: users, isLoading, refetch } = useUsersOfTenant(tenantId !== null ? tenantId : 0)
  const { data: allUsers, isLoading: isLoadingUsers } = useAllUsers()
  const { data: allRoles, isLoading: isLoadingRoles } = useAllRoles()
  const { data: tenant, isLoading: isLoadingTenant, refetch: refetchTenant } = useTenantOne(tenantId || 0) 
  const removeRoleMutation = useRemoveRoleFromTenant()
  const addRoleMutation = useAddRoleToTenant()
  const [hoveredUserId, setHoveredUserId] = useState<number | null>(null)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [form] = Form.useForm()
  const updateUserMutation = useUpdateUser() 

  if (tenantId === null) {
    return <div>Không có tenantId hợp lệ.</div>
  }

  const userList = Array.isArray(users) ? users : users?.data || []
  const currentAccountCount = userList.length
  const maxAccounts = tenant?.maxAccounts || 0
  const canAddMoreAccounts = currentAccountCount < maxAccounts

  const handleRemoveRole = async (userId: number, roleId: number) => {
    if (tenantId) {
      try {
        await removeRoleMutation.mutateAsync({
          userId,
          tenantId,
          roleId,
        })
        await updateUserMutation.mutateAsync({
          id: userId,
          data: {
            tenantId: null, // Hoặc 0 tùy backend
          },
        })
        queryClient.invalidateQueries({ queryKey: ['tenant', tenantId] })
        queryClient.invalidateQueries({ queryKey: ['users'] })
        message.success('Xóa vai trò nhân viên thành công')
        await refetch()
      } catch (error: any) {
        message.error(error?.response?.data?.message || 'Xóa vai trò nhân viên thất bại')
      }
    }
  }

  const handleAddRole = async (values: { userId: number; roleId: number }) => {
    if (tenantId) {
      try {
        await addRoleMutation.mutateAsync({
          userId: values.userId,
          tenantId,
          roleId: values.roleId,
        })
         await updateUserMutation.mutateAsync({
          id: values.userId,
          data: {
            tenantId: tenantId, // ✅ Gán tenantId
          },
        })
        queryClient.invalidateQueries({ queryKey: ['tenant', tenantId] })
        queryClient.invalidateQueries({ queryKey: ['users'] })
        message.success('Thêm vai trò cho nhân viên thành công')
        await refetch()
        setIsAddModalVisible(false)
        form.resetFields()
      } catch (error: any) {
        message.error(error?.response?.data?.message || 'Thêm vai trò thất bại')
      }
    }
  }

  const usersInTenant = allUsers || []

  return (
    <>
      <Modal
        title="Danh sách nhân viên và vai trò"
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={800}
      >
        {/* ✅ Hiển thị loading khi đang fetch users hoặc tenant */}
        {isLoading || isLoadingTenant ? (
          <div className="flex justify-center items-center py-8">
            <Spin size="large" tip="Đang tải dữ liệu..." />
          </div>
        ) : (
          <div>
            {/* ✅ Chỉ hiển thị Alert khi đã có data tenant */}
            {tenant && (
              <Alert
                message={
                  <div className="flex items-center justify-between">
                    <span>
                      Số lượng nhân viên: <strong>{currentAccountCount}/{maxAccounts}</strong>
                    </span>
                    {!canAddMoreAccounts && (
                      <span className="text-red-500 text-sm">
                        ⚠️ Đã đạt giới hạn tài khoản
                      </span>
                    )}
                  </div>
                }
                type={canAddMoreAccounts ? 'info' : 'warning'}
                className="mb-4"
              />
            )}

            {/* ✅ Nút thêm nhân viên - chỉ hiện khi đã load tenant và còn slot */}
            {tenant && canAddMoreAccounts && (
              <div className="my-4">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setIsAddModalVisible(true)}
                >
                  Thêm nhân viên ({maxAccounts - currentAccountCount} slot còn lại)
                </Button>
              </div>
            )}

            {/* ✅ Thông báo khi đã đầy - chỉ hiện khi đã load tenant */}
            {tenant && !canAddMoreAccounts && (
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                <p className="text-yellow-800">
                  🔒 Cửa hàng đã đạt giới hạn tối đa {maxAccounts} tài khoản. 
                  Vui lòng nâng cấp gói hoặc xóa bớt nhân viên để thêm mới.
                </p>
              </div>
            )}

            {userList.length > 0 ? (
              <div className="space-y-4">
                {userList.map((item: UserRoleInfo) => (
                  <div
                    key={item.user.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all relative"
                    onMouseEnter={() => setHoveredUserId(item.user.id)}
                    onMouseLeave={() => setHoveredUserId(null)}
                  >
                    <Avatar
                      src={item.user.avatar}
                      icon={!item.user.avatar && <UserOutlined />}
                      size={64}
                    />
                    <div className="flex-1">
                      <div className="text-lg font-semibold">{item.user.name}</div>
                      <div className="text-gray-600">{item.user.email}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <Tag color="blue">{item.role?.name || 'Chưa có vai trò'}</Tag>
                        <Tag color={item.user.isActive ? 'green' : 'red'}>
                          {item.user.isActive ? 'Hoạt động' : 'Không hoạt động'}
                        </Tag>
                      </div>
                      {item.role?.description && (
                        <div className="text-sm text-gray-500 mt-1">
                          {item.role.description}
                        </div>
                      )}
                    </div>

                    {hoveredUserId === item.user.id && (
                      <Popconfirm
                        title={
                          <div>
                            <div>Xác nhận xóa người dùng</div>
                            <div style={{ fontSize: 12, color: '#666' }}>
                              {`Bạn có chắc chắn muốn xóa "${item.user.name}" khỏi cửa hàng?`}
                            </div>
                          </div>
                        }
                        onConfirm={() => handleRemoveRole(item.user.id, item.role.id)}
                        okText="Xóa"
                        cancelText="Hủy"
                        okButtonProps={{ danger: true }}
                      >
                        <button
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-red-500 hover:text-red-600 transition-colors"
                          disabled={removeRoleMutation.isPending ||  updateUserMutation.isPending}
                        >
                          <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
                        </button>
                      </Popconfirm>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Không có nhân viên nào trong cửa hàng này.
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Modal thêm nhân viên */}
      <Modal
        title="Thêm nhân viên vào cửa hàng"
        visible={isAddModalVisible}
        onCancel={() => {
          setIsAddModalVisible(false)
          form.resetFields()
        }}
        footer={null}
        width={500}
      >
        <Form form={form} layout="vertical" onFinish={handleAddRole}>
          <Form.Item
            name="userId"
            label="Chọn nhân viên"
            rules={[{ required: true, message: 'Vui lòng chọn nhân viên' }]}
          >
            <Select
              placeholder="Chọn nhân viên"
              showSearch
              loading={isLoadingUsers}
              filterOption={(input, option) => {
                const label = option?.label?.toString() || ''
                return label.toLowerCase().includes(input.toLowerCase())
              }}
              options={usersInTenant?.map((user: any) => ({
                label: `${user.name} (${user.email})`,
                value: user.id,
              }))}
            />
          </Form.Item>

          <Form.Item
            name="roleId"
            label="Chọn vai trò"
            rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}
          >
            <Select placeholder="Chọn vai trò" loading={isLoadingRoles}>
              {allRoles?.map((role: any) => (
                <Select.Option key={role.id} value={role.id}>
                  <div>
                    <div className="font-semibold">{role.name}</div>
                    {role.description && (
                      <div className="text-xs text-gray-500">{role.description}</div>
                    )}
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item className="mb-0">
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setIsAddModalVisible(false)
                  form.resetFields()
                }}
              >
                Hủy
              </Button>
              <Button type="primary" htmlType="submit" loading={addRoleMutation.isPending || updateUserMutation.isPending}>
                Thêm
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UserListModalOfTenant