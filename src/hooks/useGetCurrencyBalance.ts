import { CurrencyBalanceProps } from '../typings/request'
import { BaseOptionsProps, ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Retrieve an account's current balance.
 * Implementation for `/get_currency_balance`
 *
 * @param props `get_currency_balance` props.
 * @param options custom fetch options
 * @returns ChainRequestResult<string[]>
 */
const useGetCurrencyBalance = (
  props?: CurrencyBalanceProps | null,
  options?: BaseOptionsProps<string[]>
): ChainRequestResult<string[]> => {
  return useChainFetcher<string[]>(props, {
    uri: '/v1/chain/get_currency_balance',
    ...options
  })
}

export default useGetCurrencyBalance
