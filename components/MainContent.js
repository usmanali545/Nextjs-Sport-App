import SelectMonthDays from '@/components/SelectMonthDays'
import { Column, Content, Grid, Row } from 'carbon-components-react'
import DatePicker from '@/components/DatePicker'

export default function MainContenet({ calledFrom }) {
  return (
    <Content className="page__content">
      <Grid fullWidth>
        <Row>
          <Column sm={16} lg={4}>
            <DatePicker />
          </Column>
          <Column sm={0} lg={12}>
            <SelectMonthDays />
          </Column>
        </Row>
        <Row className="fitler__content">
          <Column lg={16}>filters</Column>
        </Row>
        <Row>
          <Column lg={16}>content</Column>
        </Row>
      </Grid>
    </Content>
  )
}
