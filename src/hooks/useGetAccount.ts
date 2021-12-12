import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { AccountNameProps } from '../typings/request'
import { FetchAccountResponseProps } from '../typings/rpc'

/**
 * Fetch an account's info.
 *
 * @param props `get_account` props.
 * @param endpoint RPC Endpoint api.
 * @returns FetchAccountResponseProps | null | undefined
 */
const useGetAccount = (props?: AccountNameProps, endpoint?: string) => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  // if props is null / undefined, do not continue
  if (props == null) return

  const { data } = useSWR<FetchAccountResponseProps | null>(
    [urljoin(endpoint, '/v1/chain/get_account'), props],
    chainFetcher
  )

  return data
}

export default useGetAccount
