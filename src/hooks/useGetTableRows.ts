import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { GetTableRowsResult } from '../typings/eosjs/eosjs-rpc-interfaces'
import { TableRowsProps } from '../typings/request'

/**
 * Fetches the rows from the specified table.
 *
 * @param props `get_table_rows` props
 * @param endpoint RPC Endpoint api.
 * @returns GetTableRowsResult<T>
 */
const useGetTableRows = <T>(
  props?: TableRowsProps | null,
  endpoint?: string
): GetTableRowsResult<T> | undefined => {
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

  const { data } = useSWR<GetTableRowsResult<T>>(
    props != null
      ? [urljoin(endpoint, '/v1/chain/get_table_rows'), body]
      : null,
    chainFetcher
  )

  return data
}

export default useGetTableRows
