export function groupBy(items, key) {
  return items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )
}

export function groupByArray(items, key) {
  const groupedData = groupBy(items, key)

  let result = []

  for (const [key, value] of Object.entries(groupedData)) {
    result = [...result, value]
  }

  return result
}
