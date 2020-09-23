// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const date = req?.query?.date
  if (!date) return res.status(200).json({ data: [] })

  const url = `${process.env.API_URL}/events?accept=json&date=${date}&days=2`
  let data = null

  try {
    const result = await fetch(url)
    if (result.ok) {
      data = await result.json()
    }
  } catch (e) {
    console.log(e)
    return res.status(200).json({ data: [] })
  }

  if (!data || !data.length) {
    return res.status(200).json({ data: [] })
  }

  return res.status(200).json({ data: data.reverse() })
}
