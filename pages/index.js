import MainContenet from '@/components/MainContent'
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
      <MainContenet calledFrom="home" />
    </div>
  )
}
