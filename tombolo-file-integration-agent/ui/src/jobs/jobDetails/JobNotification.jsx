import React from 'react'
import { Card, Form, Radio, Input, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import './jobDetails.css'

//Form layout styles
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 4,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 20,
		},
	},
}
const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 20,
			offset: 4,
		},
	},
}

function JobNotification() {
	return (
		<Card title='Notification' size='small' className='jobDetails--card'>
			<Form.Item
				label='Notify'
				name='notify'
				className='jobDetails--form-item'
				required
				rules={[
					{
						required: true,
					},
				]}
			>
				<Radio.Group size='small'>
					<Radio value='never'> Never </Radio>
					<Radio value='always'> Always </Radio>
					<Radio value='onlyOnFailure'> Failure </Radio>
					<Radio value='onlyOnSuccess'> Success </Radio>
				</Radio.Group>
			</Form.Item>

			<Form.List name='recipients'>
				{(fields, { add, remove }, { errors }) => (
					<>
						{fields.map((field, index) => (
							<Form.Item
								{...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
								label={index === 0 ? 'E-mail' : ''}
								required={true}
								key={field.key}
								className='jobDetails--form-item'
							>
								<Form.Item {...field} validateTrigger={['onChange', 'onBlur']} noStyle>
									<Input
										placeholder='E-mail'
										size='small'
										className='jobDetails--form-item'
										style={{
											width: '90%',
										}}
									/>
								</Form.Item>
								{fields.length > 0 ? (
									<MinusCircleOutlined
										style={{ fontSize: '12px', marginLeft: '10px' }}
										className='dynamic-delete-button'
										onClick={() => remove(field.name)}
									/>
								) : null}
							</Form.Item>
						))}
						<Form.Item {...formItemLayoutWithOutLabel} className='jobDetails--form-item'>
							<Button
								type='dashed'
								size='small'
								onClick={() => {
									add('', 0)
								}}
								icon={<PlusOutlined />}
							>
								Add recipient
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					</>
				)}
			</Form.List>
		</Card>
	)
}

export default JobNotification
