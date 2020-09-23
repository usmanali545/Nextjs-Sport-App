import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function useSportsData(date) {
  const { data, error } = useSWR(`/api/sports?date=${date}`, fetcher)

  // groupByArray(data, 'dateView')

  return {
    sports: data,
    isLoading: !error && !data,
    isError: error,
  }
}
