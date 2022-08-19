import { GetAccountResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { AccountNameProps } from '../typings/request'
import { BaseOptionsProps, ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetch an account's info.
 * Implementation for `/get_account`
 *
 * @param props `get_account` props.
 * @param options custom fetch options
 * @returns ChainRequestResult<GetAccountResult>
 */
const useGetAccount = (
  props?: AccountNameProps | null,
  options?: BaseOptionsProps<GetAccountResult>
): ChainRequestResult<GetAccountResult> => {
  return useChainFetcher(props, {
    uri: '/v1/chain/get_account',
    ...options
  })
}

export default useGetAccount
