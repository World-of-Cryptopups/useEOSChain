import fetch from 'cross-fetch'

const chainFetcher = async <T>(url: string, body: T) =>
  await fetch(url, { method: 'POST', body: JSON.stringify(body) }).then(
    async (r) => await r.json()
  )

export default chainFetcher
