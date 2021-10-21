import React, { useState } from 'react'

import { Checkbox } from '@mui/material'

const TaskInformationComplete = ({ task, markComplete }) => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <Checkbox
            inputProps={{ 'aria-label': 'controlled' }}
            onClick={() => {
                markComplete(task.id)
            }}
        />
    )
}

export default TaskInformationComplete
