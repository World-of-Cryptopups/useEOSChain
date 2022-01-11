import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { GetAccountResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { AccountNameProps } from '../typings/request'

/**
 * Fetch an account's info.
 *
 * @param props `get_account` props.
 * @param endpoint RPC Endpoint api.
 * @returns GetAccountResult | null | undefined
 */
const useGetAccount = (props?: AccountNameProps | null, endpoint?: string) => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data } = useSWR<GetAccountResult | null>(
    props != null ? [urljoin(endpoint, '/v1/chain/get_account'), props] : null,
    chainFetcher
  )

  return data
}

export default useGetAccount
