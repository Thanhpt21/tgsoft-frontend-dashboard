'use client';

import { Image, Layout, Menu } from 'antd';
import { AppleOutlined, AppstoreOutlined, BgColorsOutlined, BranchesOutlined, DashboardOutlined, FileProtectOutlined, GiftOutlined, HomeOutlined, MessageOutlined, PicLeftOutlined, PicRightOutlined, ProductOutlined, ScissorOutlined, SettingOutlined, SkinOutlined, SolutionOutlined, ToolOutlined, TruckOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface SidebarAdminProps {
  collapsed: boolean;
}

export default function SidebarAdmin({ collapsed }: SidebarAdminProps) {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="!bg-white shadow"
      style={{ backgroundColor: '#fff' }}
    >
      <div className=" text-center py-4">
        <Image
          src="https://www.sfdcpoint.com/wp-content/uploads/2019/01/Salesforce-Admin-Interview-questions.png"
          alt="Admin Logo"
          width={collapsed ? 40 : 80}
          preview={false}
        />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: 'admin',
            icon: <DashboardOutlined />,
            label: <Link href="/admin">Dashboard</Link>,
          },
          {
            key: 'tenant',
            icon: <HomeOutlined />,
            label: <Link href="/admin/tenant">Cửa hàng</Link>,
          },
          {
            key: 'users',
            icon: <UserOutlined />,
            label: <Link href="/admin/users">Tài khoản</Link>,
          },
          {
            key: 'role',
            icon: <SettingOutlined />,
            label: <Link href="/admin/role">Vai trò</Link>,
          },
           {
            key: 'permission',
            icon: <FileProtectOutlined />,
            label: <Link href="/admin/permission">Quyền</Link>,
          },
             {
            key: 'promptAI',
            icon: <SolutionOutlined />,
            label: <Link href="/admin/promptAI">Kịch bản AI</Link>,
          },
          {
            key: 'Support',
            icon: <ToolOutlined />,
            label: <Link href="/admin/support-mailbox">Yêu cầu hổ trợ</Link>
          },
        
        ]}
      />
    </Layout.Sider>
  );
}