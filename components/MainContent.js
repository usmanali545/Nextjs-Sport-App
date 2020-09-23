import SelectMonthDays from '@/components/SelectMonthDays'
import { Column, Content, Grid, Row } from 'carbon-components-react'
import DatePicker from '@/components/DatePicker'

export default function MainContenet({ calledFrom, games, date }) {
  return (
    <Content className="page__content">
      <Grid fullWidth>
        <Row>
          <Column sm={16} lg={4}>
            <DatePicker date={date} />
          </Column>
          <Column sm={0} lg={12}>
            <SelectMonthDays date={date} />
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
