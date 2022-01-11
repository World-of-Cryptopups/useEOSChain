import fetch from 'cross-fetch'
import { InternalServerErrorProps } from '../typings/error'
import ChainError from './error'

const chainFetcher = async <T>(url: string, body: T) => {
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(body) })

  if (!res.ok) {
    // there might be other errors aside from code 500, it should be checked
    const errData: InternalServerErrorProps = await res.json()

    throw new ChainError(errData)
  }

  return await res.json()
}

export default chainFetcher
