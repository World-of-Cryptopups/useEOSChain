import { GetTableRowsResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { TableRowsProps } from '../typings/request'
import { BaseOptionsProps, ChainRequestResult } from '../typings/result'
import useChainFetcher from './useChainFetcher'

/**
 * Fetches the rows from the specified table.
 * Implementation for `/get_table_rows`
 *
 * @param props `get_table_rows` props
 * @param options custom fetch options
 * @returns ChainRequestResult<GetTableRowsResult<T>>
 */
const useGetTableRows = <T>(
  props?: TableRowsProps | null,
  options?: BaseOptionsProps<GetTableRowsResult<T>>
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

  return useChainFetcher<GetTableRowsResult<T>>(props != null ? body : null, {
    uri: '/v1/chain/get_table_rows',
    ...options
  })
}

export default useGetTableRows
