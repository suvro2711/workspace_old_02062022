import React, { useState } from 'react'
import { getCalender } from '../../../utils/calender'
import { weeks } from '../../../utils/constants'
import Date from '../../molecules/Calender/Date'
import ScheduleScreen from '../../molecules/Calender/ScheduleScreen'
import './calendar.scss'

function Calender() {

    const [currentDate, setCurrentDate] = useState({})
    console.log(currentDate)

    const calenderData = getCalender()

    return (
        <ScheduleScreen />
        // <div className='calenderWrapper'>
        //     <table>
        //         <tr>
        //             {weeks.map(weekday => <th>{weekday}</th>)}
        //         </tr>
        //         {calenderData.dates.map(column => {
        //             return (<tr>
        //                 {column.map(date => <Date
        //                     date={date}
        //                     setCurrentDate={setCurrentDate}
        //                 >
        //                     {date?.value}
        //                 </Date>
        //                 )}
        //             </tr>)
        //         })}
        //     </table>
        // </div >
    )
}

export default Calender
