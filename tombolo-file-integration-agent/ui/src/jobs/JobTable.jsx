/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Table, Space } from 'antd'

//Test Data
const data = [
	{
		key: '1',
		jobName: 'JH Covid Files',
		lastRan: '06-27-2022:13:41',
		lastRanStatus: 'Success',
		totalRuns: 30,
	},
	{
		key: '2',
		jobName: 'JH Covid Files',
		lastRan: '06-27-2022:13:41',
		lastRanStatus: 'Success',
		totalRuns: 30,
	},
]

//User actions
const actions = ['Execute', 'Pause', 'View']

//Table Columns
const columns = [
	{
		title: 'Job Name',
		dataIndex: 'jobName',
	},
	{
		title: 'Last Ran',
		dataIndex: 'lastRan',
	},
	{
		title: 'Last Ran Status',
		dataIndex: 'lastRanStatus',
	},
	{
		title: 'Total Runs',
		dataIndex: 'totalRuns',
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		render: (_, record) => (
			<Space>
				{actions.map((action) => {
					return <a key={action}>{action}</a>
				})}
			</Space>
		),
	},
]

const JobTable = () => {
	//When component loads
	useEffect(() => {
		const newLocal = 'Run this code'
		console.log(newLocal)
	}, [])

	//JSX
	return (
		<div>
			<Table dataSource={data} columns={columns} size='small' />
		</div>
	)
}

export default JobTable
