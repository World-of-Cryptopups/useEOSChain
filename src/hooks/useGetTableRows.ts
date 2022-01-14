import { GetTableRowsResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { TableRowsProps } from '../typings/request'
import { ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetches the rows from the specified table.
 * Implementation for `/get_table_rows`
 *
 * @param props `get_table_rows` props
 * @param endpoint RPC Endpoint api.
 * @returns ChainRequestResult<GetTableRowsResult<T>>
 */
const useGetTableRows = <T>(
  props?: TableRowsProps | null,
  endpoint?: string
): ChainRequestResult<GetTableRowsResult<T>> => {
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

  return useChainFetcher<GetTableRowsResult<T>>(
    props != null ? body : null,
    '/v1/chain/get_table_rows',
    endpoint
  )
}

export default useGetTableRows
