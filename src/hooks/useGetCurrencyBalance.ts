import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { CurrencyBalanceProps } from '../typings/rpc'

/**
 * Retrieve an account's current balance.
 *
 * @param props `get_currency_balance` props.
 * @param endpoint RPC Endpoint api.
 * @returns string[] | null | undefined
 */
const useGetCurrencyBalance = (
  props: CurrencyBalanceProps,
  endpoint?: string
) => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data } = useSWR<string[] | null>(
    urljoin(endpoint, '/v1/chain/get_currency_balance'),
    async (url) => await chainFetcher(url, props)
  )

  return data
}

export default useGetCurrencyBalance