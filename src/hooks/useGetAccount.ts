import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { GetAccountResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { InternalServerErrorProps } from '../typings/error'
import { AccountNameProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'

/**
 * Fetch an account's info.
 *
 * @param props `get_account` props.
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<GetAccountResult>
 */
const useGetAccount = (
  props?: AccountNameProps | null,
  endpoint?: string
): ChainRequestResult<GetAccountResult> => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data, error } = useSWR<
    GetAccountResult,
    ChainError<InternalServerErrorProps>
  >(
    props != null ? [urljoin(endpoint, '/v1/chain/get_account'), props] : null,
    chainFetcher
  )

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }
  return { data, hasFailed, error }
}

export default useGetAccount
