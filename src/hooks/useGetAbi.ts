import { GetAbiResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { AccountNameProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetch the abi of a smart contract account.
 * Implementation for `/get_abi`
 *
 * @param props `get_abi` props
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<GetAbiResult>
 */
const useGetABI = (
  props?: AccountNameProps | null,
  endpoint?: string
): ChainRequestResult<GetAbiResult> => {
  return useChainFetcher<GetAbiResult>(props, '/v1/chain/get_abi', endpoint)
}

export default useGetABI
