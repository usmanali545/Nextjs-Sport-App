import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { isAfter } from 'date-fns'
import { groupByArray } from 'utiles/array'

const LoadingNoSSR = dynamic(() => import('components/Loading'), {
  ssr: false,
  loading: () => <div>...loading</div>,
})

export default function SportsOnDate({ data }) {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingNoSSR />
  }

  if (!data || !data.length) {
    return <div>sorry </div>
  }
  const gamesGroupedArray = groupByArray(data, 'dateView')
  console.log(gamesGroupedArray)

  return <div>SportsOnDate</div>
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { date: '' } }, // See the "paths" section below
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
