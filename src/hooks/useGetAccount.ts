import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { AccountNameProps } from '../typings/request'

/**
 * Fetch an account's info.
 *
 * @param props `get_account` props.
 * @param endpoint RPC Endpoint api.
 * @returns string[] | null | undefined
 */
const useGetAccount = (props?: AccountNameProps, endpoint?: string) => {
  if (props == null) return

  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data } = useSWR<string[] | null>(
    urljoin(endpoint, '/v1/chain/get_account'),
    async (url) => await chainFetcher(url, props)
  )

  return data
}

export default useGetAccount
