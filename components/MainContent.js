import SelectMonthDays from '@/components/SelectMonthDays'
import { Column, Content, Grid, Row } from 'carbon-components-react'
import DatePicker from '@/components/DatePicker'
import GamesTable from './GamesTable'
import Filters from './Filters'
import { useState } from 'react'

export default function MainContenet({ calledFrom, games, date }) {
  const [selectedFilter, setSelectedFilter] = useState({})

  let filters = []
  let filtersSet = new Set()
  if (games && games.length > 0) {
    // get all tags[0]
    // remove dublicates with a set
    //    stringify the object so we can have unique values
    //    parse the string to object

    // the ;[].concat(...games) is poor man's flat array
    {
      ;[].concat(...games).forEach((game) => {
        try {
          JSON.stringify(game?.tags?.[0])
          filtersSet.add(JSON.stringify(game?.tags?.[0]))
        } catch (e) {
          console.log('cannot stringify the tag', e)
        }
      })
    }
    filters = Array.from(filtersSet).map((item) => {
      if (typeof item === 'string') {
        try {
          JSON.parse(item)
          return JSON.parse(item)
        } catch (e) {
          console.log('cannot parse the item', e)
          return
        }
      } else if (typeof item === 'object') {
        return item
      }
    })
  }
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
          <Column lg={16}>
            <Filters
              filters={filters}
              setSelectedFilter={setSelectedFilter}
              selectedFilter={selectedFilter}
            />
          </Column>
        </Row>
        <Row>
          <Column lg={16}>
            <GamesTable games={games} />
          </Column>
        </Row>
      </Grid>
    </Content>
  )
}
