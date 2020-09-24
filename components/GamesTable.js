import { Column, Grid, Row, Tag } from 'carbon-components-react'
import { format } from 'date-fns'

export default function GamesTable({ games }) {
  return games.map((days, i) => (
    <Grid key={i}>
      <Row className="games-table__date">
        <Column>
          <h3>{format(new Date(days[0].dateView), 'PPPP')}</h3>
        </Column>
      </Row>
      {days.map((game, i) => (
        <Row className="games-table__game-row" key={i}>
          <Column sm={16} lg={1}>
            <Grid>
              <Row className="games-table__time">{game?.timeView}</Row>
              <Row>{game?.channel?.name}</Row>
            </Grid>
          </Column>
          <Column sm={16} lg={15}>
            <Grid>
              <Row className="games-table__title">{game?.title}</Row>
              <Row>
                {game?.tags?.map((tag) => (
                  <Tag type="high-contrast" id={String(tag?.id)} key={tag?.id}>
                    {tag?.displayName}
                  </Tag>
                ))}
              </Row>
              <Row>{game?.description}</Row>
            </Grid>
          </Column>
        </Row>
      ))}
    </Grid>
  ))
}
