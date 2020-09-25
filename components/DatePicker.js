import {
  DatePicker as CarbonDatePicker,
  DatePickerInput,
} from 'carbon-components-react'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

export default function DatePicker({ date }) {
  const router = useRouter()

  function handleChange(dates, currentDateString) {
    // console.log(dates[0] instanceof Date)
    // console.log(dates[0])
    const dateForUrl = format(dates[0], 'yyyy-MM-dd')
    router.push(`/date/${dateForUrl}`)
  }
  return (
    <CarbonDatePicker
      datePickerType="single"
      onChange={handleChange}
      dateFormat="yy-m-d"
      value={date}
    >
      <DatePickerInput
        placeholder="yyyy-dd-mm"
        labelText="Select Date"
        id="date-picker-single"
        autoComplete="off"
        readOnly
        hideLabel
      />
    </CarbonDatePicker>
  )
}
