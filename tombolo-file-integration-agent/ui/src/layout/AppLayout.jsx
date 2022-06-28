import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { DashboardOutlined } from '@ant-design/icons'

import JobTable from '../jobs/JobTable'
import AddJob from '../jobs/JobDetailsDrawer'

const { Header, Content, Sider } = Layout

//Menu Items
const menuItems = [{ label: 'Jobs', key: '1', icon: <DashboardOutlined /> }]

const AppLayout = () => {
	const [collapsed, setCollapsed] = useState(true)

	return (
		<Layout>
			<Header className='header'>
				<div className='logo' style={{ color: 'white' }}>
					Logo Here
				</div>
			</Header>
			<Content style={{ height: '100vh' }}>
				<Layout className='site-layout-background'>
					<Sider
						className='site-layout-background'
						width={100}
						style={{ height: '100vh' }}
						collapsible={true}
						collapsed={collapsed}
						onCollapse={(value) => setCollapsed(value)}
					>
						<Menu mode='inline' theme='dark' defaultSelectedKeys={['12']} items={menuItems} />
					</Sider>
					<Content
						style={{
							padding: '0 24px',
							minHeight: 280,
						}}
					>
						<div style={{ margin: '10px 0 ', float: 'right' }}>
							<AddJob />
						</div>
						<JobTable />
					</Content>
				</Layout>
			</Content>
		</Layout>
	)
}

export default AppLayout
