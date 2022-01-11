import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { InternalServerErrorProps } from '../typings/error'
import { CurrencyBalanceProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'

/**
 * Retrieve an account's current balance.
 *
 * @param props `get_currency_balance` props.
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<string[]>
 */
const useGetCurrencyBalance = (
  props?: CurrencyBalanceProps | null,
  endpoint?: string
): ChainRequestResult<string[]> => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data, error } = useSWR<
    string[],
    ChainError<InternalServerErrorProps>
  >(
    props != null
      ? [urljoin(endpoint, '/v1/chain/get_currency_balance'), props]
      : null,
    chainFetcher
  )

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }
  return { data, hasFailed, error }
}

export default useGetCurrencyBalance
