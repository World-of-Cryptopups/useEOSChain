import { GetAccountResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { AccountNameProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetch an account's info.
 * Implementation for `/get_account`
 *
 * @param props `get_account` props.
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<GetAccountResult>
 */
const useGetAccount = (
  props?: AccountNameProps | null,
  endpoint?: string
): ChainRequestResult<GetAccountResult> => {
  return useChainFetcher(props, '/v1/chain/get_account', endpoint)
}

export default useGetAccount
