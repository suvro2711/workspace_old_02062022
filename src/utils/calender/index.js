import moment from 'moment'

export const getCalender = () => {
    const calendar = {}
    calendar.dates = Array(6).fill(null)
    calendar.dates.forEach((item, index, array) => array[index] = Array(7).fill(0))
    window.moment = moment
    // const calendar = [];
    const today = moment()
    const startDay = today.clone().startOf('month');
    const endDay = today.clone().endOf('month').add(1, 'day');

    let date = startDay.clone()

    calendar.month = date.format('MMMM')
    calendar.monthNumber = date.format('M')
    calendar.year = date.format('YYYY')
    let currentRow = 0
    while (date.isBefore(endDay, 'day')) {
        let currentColumn = date.weekday()
        calendar.dates[currentRow][currentColumn] = {
            value: date.format('D'),
            month: date.format('MMMM'),
            monthNumber: date.format('M'),
            year: date.format('YYYY'),
            weekday: date.format('dddd'),
            moment: date
        }
        let lastDateOfFirstRow = calendar.dates[currentRow][calendar.dates[currentRow].length - 1]
        if (lastDateOfFirstRow) {
            currentRow += 1
        }
        date.add(1, 'day')
    }
    // date.add(1, 'day')

    return (calendar)

}