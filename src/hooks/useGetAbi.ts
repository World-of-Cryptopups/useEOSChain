import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { GetAbiResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { AccountNameProps } from '../typings/request'

/**
 * Fetch the abi of a smart contract account.
 *
 * @param props `get_abi` props
 * @param endpoint RPC Endpoint api.
 * @returns GetAbiResult | null | undefined
 */
const useGetABI = (props?: AccountNameProps, endpoint?: string) => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  // if props is null / undefined, do not continue
  if (props == null) return

  const { data } = useSWR<GetAbiResult | null>(
    [urljoin(endpoint, '/v1/chain/get_abi'), props],
    chainFetcher
  )

  return data
}

export default useGetABI
