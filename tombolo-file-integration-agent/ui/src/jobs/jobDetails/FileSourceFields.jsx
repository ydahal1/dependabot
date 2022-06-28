import React from 'react'
import { Form, Input, Select, Card, Radio } from 'antd'
import './jobDetails.css'

const { Option } = Select
const fileSourceOptions = ['Github', 'Rest API']

function FileSourceFields() {
	return (
		<Card title='Source' size='small' className='jobDetails--card'>
			<Form.Item
				name='source'
				label='Source'
				className='jobDetails--form-item'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select placeholder='Select file source' size='small' allowClear>
					{fileSourceOptions.map((fileSourceOption) => (
						<Option value={fileSourceOption}>{fileSourceOption}</Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item
				label='Monitor'
				name='isRepo'
				className='jobDetails--form-item'
				required
				rules={[
					{
						required: true,
					},
				]}
			>
				<Radio.Group size='small'>
					<Radio value={false}> File </Radio>
					<Radio value={true}> Directory </Radio>
				</Radio.Group>
			</Form.Item>

			<Form.Item
				name='sourceUrl'
				className='jobDetails--form-item'
				label='URL'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input size='small'></Input>
			</Form.Item>
		</Card>
	)
}

export default FileSourceFields
