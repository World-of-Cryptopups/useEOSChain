import { GetInfoResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetches the info about the eosio endpoint api.
 * Implementation for `/get_info`
 *
 * @param endpoint RPC Endpoint api.
 * @returns sChainRequestResult<GetInfoResult>
 */
const useGetInfo = (endpoint?: string): ChainRequestResult<GetInfoResult> => {
  return useChainFetcher<GetInfoResult>({}, '/v1/chain/get_info', endpoint)
}

export default useGetInfo
