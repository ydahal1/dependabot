import React from 'react'
import { Form, Input, Card } from 'antd'

import './jobDetails.css'

function JobSchedule() {
	return (
		<Card title='Schedule' size='small'>
			<Form.Item
				name='name'
				className='jobDetails--form-item'
				label='Job Name'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input size='small'></Input>
			</Form.Item>

			<Form.Item
				name='cron'
				className='jobDetails--form-item'
				label='Cron'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input size='small' placeholder='* * * * *'></Input>
			</Form.Item>
			<div>
				<a style={{ float: 'right' }} href='https://crontab.cronhub.io/' target='_blank' rel='noopener noreferrer'>
					Create corn expression
				</a>
			</div>
		</Card>
	)
}

export default JobSchedule
