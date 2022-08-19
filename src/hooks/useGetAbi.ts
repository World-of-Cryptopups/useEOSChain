import { GetAbiResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { AccountNameProps } from '../typings/request'
import { BaseOptionsProps, ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetch the abi of a smart contract account.
 * Implementation for `/get_abi`
 *
 * @param props `get_abi` props
 * @param options custom fetch options
 * @returns ChainRequestResult<GetAbiResult>
 */
const useGetABI = (
  props?: AccountNameProps | null,
  options?: BaseOptionsProps<GetAbiResult>
): ChainRequestResult<GetAbiResult> => {
  return useChainFetcher<GetAbiResult>(props, {
    uri: '/v1/chain/get_abi',
    ...options
  })
}

export default useGetABI
