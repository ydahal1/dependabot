import React, { useState } from 'react'
import { Button, Drawer, Space, Form } from 'antd'

import JobForm from './jobDetails/JobForm'

function AddJob() {
	const [openDrawer, setOpenDrawer] = useState(false)
	const [form] = Form.useForm()

	//When Add job Btn is clicked
	const openJobDrawer = () => {
		setOpenDrawer(true)
	}

	//Close drawer
	const closeDrawer = () => {
		setOpenDrawer(false)
	}

	//Save Job Details
	const saveJobDetails = async () => {
		await form.validateFields()
		const jobDetails = form.getFieldsValue()

		let metaData = {}

		//Add notification settings to metaData object
		if (jobDetails.notify !== 'never') {
			metaData = {
				notify: jobDetails.notify,
				recipients: jobDetails.recipients,
			}
			jobDetails.metaData = metaData
		}

		// Remove notify and recipients from jobDetails object
		delete jobDetails.notify
		delete jobDetails.recipients

		console.log(jobDetails)
	}

	return (
		<div>
			<Button onClick={openJobDrawer}> Add Job</Button>
			<Drawer
				title='Add new job'
				closable={false}
				width={500}
				onClose={() => setOpenDrawer(false)}
				destroyOnClose={true}
				maskClosable={false}
				visible={openDrawer}
				bodyStyle={{ background: '#303030', padding: '12px' }}
				extra={
					<Space>
						<Button
							size='small'
							onClick={() => {
								closeDrawer()
							}}
						>
							Cancel
						</Button>
						<Button type='primary' size='small' onClick={saveJobDetails}>
							Save
						</Button>
					</Space>
				}
			>
				<Form form={form}>
					<JobForm />
				</Form>
			</Drawer>
		</div>
	)
}

export default AddJob
