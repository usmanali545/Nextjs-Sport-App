import MainContenet from '@/components/MainContent'
import Header from 'components/Header'
import Head from 'next/head'
import useSportsData from '../hooks/useSportsData'
import { format } from 'date-fns'
import dynamic from 'next/dynamic'

const LoadingNoSSR = dynamic(() => import('components/Loading'), {
  ssr: false,
  loading: () => <div>...loading</div>,
})

export default function Home() {
  const today = format(new Date(), 'yyyy-MM-dd')
  const { sports, isLoading, isError } = useSportsData(today)

  if (isLoading) {
    return <LoadingNoSSR />
  }

  if (isError) {
    return <div>oops</div>
  }

  return (
    <div>
      <Head>
        <title>Sports TV Program</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="C2Pms5muBSXaPEw4r46887wfPWzg0NkwmPPk37a8tMg"
        />
      </Head>

      <Header />
      <MainContenet calledFrom="home" games={sports} date={new Date()} />
    </div>
  )
}
