import {
  DatePicker as CarbonDatePicker,
  DatePickerInput,
} from 'carbon-components-react'

export default function DatePicker() {
  return (
    <CarbonDatePicker datePickerType="single">
      <DatePickerInput
        placeholder="mm/dd/yyyy"
        labelText="Date Picker label"
        id="date-picker-single"
        autocomplete="off"
      />
    </CarbonDatePicker>
  )
}
