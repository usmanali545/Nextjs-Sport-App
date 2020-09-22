import DatePicker from '@/components/DatePicker'
import SelectMonthDays from '@/components/SelectMonthDays'
import { Button, Content } from 'carbon-components-react'
import Header from 'components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sports TV Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content className="page__content">
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col-sm-16 bx--col-lg-4">
              <DatePicker />
            </div>
            <div className="bx--col-sm-0 bx--col-lg-12">
              <SelectMonthDays />
            </div>
          </div>
          <div className="bx--row fitler__content">
            <div className="bx--col-lg-16">filters</div>
          </div>
          <div className="bx--row">
            <div className="bx--col">content</div>
          </div>
        </div>
      </Content>
    </div>
  )
}
