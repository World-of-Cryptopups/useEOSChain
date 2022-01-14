import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { InternalServerErrorProps } from '../typings/error'
import { ChainRequestResult } from '../typings/result'

/**
 * Custom request hook for send request to custom chain url apis.
 *
 * @param props Request body props.
 * @param uri  The chain url api to send request.
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<K>
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useChainFetcher = <K, T = Record<string, any>>(
  props: T | null | undefined,
  uri: string,
  endpoint?: string
): ChainRequestResult<K> => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data, error } = useSWR<K, ChainError<InternalServerErrorProps>>(
    props != null ? [urljoin(endpoint, uri), props] : null,
    chainFetcher
  )

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }

  return { data, hasFailed, error }
}

export default useChainFetcher
