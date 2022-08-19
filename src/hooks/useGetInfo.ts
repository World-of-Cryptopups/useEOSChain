import { GetInfoResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { BaseOptionsProps, ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetches the info about the eosio endpoint api.
 * Implementation for `/get_info`
 *
 * @param options custom fetch options
 * @returns sChainRequestResult<GetInfoResult>
 */
const useGetInfo = (
  options?: BaseOptionsProps<GetInfoResult>
): ChainRequestResult<GetInfoResult> => {
  return useChainFetcher<GetInfoResult>(
    {},
    {
      uri: '/v1/chain/get_info',
      ...options
    }
  )
}

export default useGetInfo
