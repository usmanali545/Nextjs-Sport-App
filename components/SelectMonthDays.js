import { Button } from 'carbon-components-react'
import {
  endOfMonth,
  format,
  getDaysInMonth,
  getMonth,
  startOfMonth,
  eachDayOfInterval,
  isToday,
} from 'date-fns'
import NextLink from 'next/link'

export default function SelectMonthDays({ date }) {
  let selectedDate = date || new Date()
  let selectedDay = selectedDate.getDate()
  let monthText = format(selectedDate, 'MMMM')
  let todayDayNumber = new Date().getDate()

  let monthDays = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  })

  return (
    <>
      <div>{monthText}</div>
      {monthDays.map((date) => {
        let dayNumber = date.getDate()
        let dateAsUrlFormated = format(date, 'yyyy-MM-dd')
        let showTodayBorder = isToday(date) && !(selectedDay === dayNumber)
        return (
          <NextLink
            passHref
            href="/date/[date]"
            as={`/date/${dateAsUrlFormated}`}
            key={dayNumber}
          >
            <Button
              kind={selectedDay === dayNumber ? 'tertiary' : 'ghost'}
              key={dayNumber}
              as="a"
              className={showTodayBorder ? 'selected-month__today' : ''}
            >
              {dayNumber}
            </Button>
          </NextLink>
        )
      })}
    </>
  )
}
