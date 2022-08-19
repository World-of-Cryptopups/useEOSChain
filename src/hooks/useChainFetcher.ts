import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { InternalServerErrorProps } from '../typings/error'
import { ChainRequestResult } from '../typings/result'

interface useChainFetcherOptions<T = any> {
  uri: string
  endpoint?: string
  initialData?: T
}

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
  options: useChainFetcherOptions<K>
): ChainRequestResult<K> => {
  let { uri, endpoint, initialData } = options

  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  const { data, error } = useSWR<K, ChainError<InternalServerErrorProps>>(
    endpoint != null
      ? props != null
        ? [urljoin(endpoint, uri), props]
        : null
      : null,
    chainFetcher,
    {
      fallbackData: initialData
    }
  )

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }

  return { data, hasFailed, error }
}

export default useChainFetcher
