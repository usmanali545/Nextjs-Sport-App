import {
  DatePicker as CarbonDatePicker,
  DatePickerInput,
} from 'carbon-components-react'

export default function DatePicker() {
  function handleChange(dates, currentDateString) {
    // todo:
    console.log(dates[0] instanceof Date)
    console.log(dates[0])
  }
  return (
    <CarbonDatePicker
      datePickerType="single"
      onChange={handleChange}
      dateFormat="yy-m-d"
    >
      <DatePickerInput
        placeholder="yyyy-dd-mm"
        labelText="Date Picker label"
        id="date-picker-single"
        autoComplete="off"
      />
    </CarbonDatePicker>
  )
}
