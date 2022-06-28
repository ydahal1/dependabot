import React from 'react'

import FileSourceFields from './FileSourceFields'
import FileDestinationFields from './FileDestinationFields'
import JobNotification from './JobNotification'
import JobSchedule from './JobSchedule'

function jobForm() {
	return (
		<>
			<FileSourceFields />
			<FileDestinationFields />
			<JobNotification />
			<JobSchedule />
		</>
	)
}

export default jobForm
