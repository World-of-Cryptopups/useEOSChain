import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { GetAbiResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { InternalServerErrorProps } from '../typings/error'
import { AccountNameProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'

/**
 * Fetch the abi of a smart contract account.
 *
 * @param props `get_abi` props
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<GetAbiResult>
 */
const useGetABI = (
  props?: AccountNameProps | null,
  endpoint?: string
): ChainRequestResult<GetAbiResult> => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const { data, error } = useSWR<
    GetAbiResult,
    ChainError<InternalServerErrorProps>
  >(
    props != null ? [urljoin(endpoint, '/v1/chain/get_abi'), props] : null,
    chainFetcher
  )

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }

  return { data, hasFailed, error }
}

export default useGetABI
