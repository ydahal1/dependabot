import React from 'react'
import { Form, Select, Card, Cascader } from 'antd'
import './jobDetails.css'

const { Option } = Select
const fileSourceOptions = ['Github', 'Rest API']

//Sample cascader data
const options = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
]

function FileDestinationFields() {
	return (
		<Card title='Destination' size='small' className='jobDetails--card'>
			<Form.Item
				name='destinationCluster'
				label='HPCC Cluster'
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
				name='destionationDirectory'
				className='jobDetails--form-item'
				label='Directory'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Cascader options={options} placeholder='Select directory' size='small' />
			</Form.Item>
		</Card>
	)
}

export default FileDestinationFields
