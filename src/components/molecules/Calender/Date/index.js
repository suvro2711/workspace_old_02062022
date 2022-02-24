import React from 'react'

const Date = ({ date, setCurrentDate }) => {
    const dateState = date
    return (
        <td
            onClick={() => { setCurrentDate(dateState) }}
        >
            {date.value}
        </td>
    )
}

export default Date
