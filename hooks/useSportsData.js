import useSWR from 'swr'
import { groupByArray } from 'utiles/array'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function useSportsData(date) {
  const { data: result, error } = useSWR(`/api/sports?date=${date}`, fetcher)

  let gamesGroupedArray = []
  if (result?.data) {
    gamesGroupedArray = groupByArray(result.data, 'dateView')
  }

  return {
    sports: gamesGroupedArray,
    isLoading: !error && !result,
    isError: error,
  }
}
