import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { GetInfoResult } from '../typings/eosjs/eosjs-rpc-interfaces'

/**
 * Fetches the info about the eosio endpoint api.
 *
 * @param endpoint RPC Endpoint api.
 * @returns GetInfoResult
 */
const useGetInfo = (endpoint?: string) => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data } = useSWR<GetInfoResult>(
    urljoin(endpoint, '/v1/chain/get_info'),
    chainFetcher
  )

  return data
}

export default useGetInfo
