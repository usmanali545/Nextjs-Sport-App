import { Content } from 'carbon-components-react'
import Header from 'components/Header'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sports TV Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content>
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col-sm-16 bx--col-lg-4">calendar</div>
            <div className="bx--col-sm-16 bx--col-lg-12">days of month</div>
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
