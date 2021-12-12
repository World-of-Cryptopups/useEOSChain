import fetch from 'cross-fetch'

const chainFetcher = async <T>(url: string, body: T) => {
  const r = await fetch(url, { method: 'POST', body: JSON.stringify(body) })

  return await r.json()
}

export default chainFetcher
