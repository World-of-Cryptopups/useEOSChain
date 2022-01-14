import { CurrencyBalanceProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Retrieve an account's current balance.
 * Implementation for `/get_currency_balance`
 *
 * @param props `get_currency_balance` props.
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<string[]>
 */
const useGetCurrencyBalance = (
  props?: CurrencyBalanceProps | null,
  endpoint?: string
): ChainRequestResult<string[]> => {
  return useChainFetcher<string[]>(
    props,
    '/v1/chain/get_currency_balance',
    endpoint
  )
}

export default useGetCurrencyBalance
