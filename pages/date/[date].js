import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { isAfter } from 'date-fns'
import { groupByArray } from 'utiles/array'
import GamesTable from '@/components/GamesTable'
import MainContenet from '@/components/MainContent'
import Head from 'next/head'
import Header from '@/components/Header'

const LoadingNoSSR = dynamic(() => import('components/Loading'), {
  ssr: false,
  loading: () => <div>...loading</div>,
})

export default function SportsOnDate({ data }) {
  const router = useRouter()
  console.log(router.query.date)

  if (router.isFallback) {
    return <LoadingNoSSR />
  }

  if (!data || !data.length) {
    return <div>sorry </div>
  }
  const gamesGroupedArray = groupByArray(data, 'dateView')

  return (
    <div>
      <Head>
        <title>Sports TV Program at {router.params?.date} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainContenet
        calledFrom="date-single"
        games={gamesGroupedArray}
        date={new Date(router.query.date)}
      />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { date: '2020-09-23' } }, // See the "paths" section below
    ],
    fallback: true, // or false // See the "fallback" section below
  }
}

export async function getStaticProps(context) {
  const date = context?.params?.date
  const url = `${process.env.API_URL}/events?accept=json&date=${date}&days=2`

  const res = await fetch(url)
  let data = null
  if (res.ok) {
    data = await res.json()
  }

  if (!data || !data.length) {
    return {
      props: {}, // will be passed to the page component as props
      revalidate: 1,
    }
  }

  return {
    props: { data: data.reverse() }, // will be passed to the page component as props
    revalidate: 1,
  }
}
