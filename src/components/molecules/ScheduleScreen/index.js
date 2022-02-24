import React, { useState } from 'react'
import './scheduleScreen.scss'

const ScheduleScreen = () => {
    const [taskList, setTaskList] = useState([])

    return (
        <div class='dateScreen'
            id='dateScreen'
            onClickCapture={getHeight}
        >
            {taskList.map(task => {
                return <div
                    id='task'
                    className='dateScreen_task'
                    style={{ top: `${task.top}px` }}></div>
            })
            }
        </div>
    )
}

export default ScheduleScreen
