import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import ChainError from '../lib/error'
import chainFetcher from '../lib/fetcher'
import { GetTableRowsResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { InternalServerErrorProps } from '../typings/error'
import { TableRowsProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'

/**
 * Fetches the rows from the specified table.
 *
 * @param props `get_table_rows` props
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<GetTableRowsResult<T>>
 */
const useGetTableRows = <T>(
  props?: TableRowsProps | null,
  endpoint?: string
): ChainRequestResult<GetTableRowsResult<T>> => {
  const { endpoint: _endpoint } = useEOS()
  endpoint = endpoint != null ? endpoint : _endpoint

  // throw error if no endpoint set
  if (endpoint == null) throw new Error('RPC Endpoint not set.')

  const body: TableRowsProps = {
    json: true,
    index_position: 1,
    limit: 10,
    reverse: false,
    show_payer: false,
    lower_bound: '',
    upper_bound: '',
    key_type: '',
    ...(props ?? { code: '', scope: '', table: '' })
  }

  const { data, error } = useSWR<
    GetTableRowsResult<T>,
    ChainError<InternalServerErrorProps>
  >(
    props != null
      ? [urljoin(endpoint, '/v1/chain/get_table_rows'), body]
      : null,
    chainFetcher
  )

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }
  return { data, hasFailed, error }
}

export default useGetTableRows
