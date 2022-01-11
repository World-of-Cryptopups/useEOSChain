import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { GetInfoResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { InternalServerErrorProps } from '../typings/error'
import { ChainRequestResult } from '../typings/result'

/**
 * Fetches the info about the eosio endpoint api.
 *
 * @param endpoint RPC Endpoint api.
 * @returns sChainRequestResult<GetInfoResult>
 */
const useGetInfo = (endpoint?: string): ChainRequestResult<GetInfoResult> => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data, error } = useSWR<
    GetInfoResult,
    ChainError<InternalServerErrorProps>
  >(urljoin(endpoint, '/v1/chain/get_info'), chainFetcher)

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }
  return { data, hasFailed, error }
}

export default useGetInfo
