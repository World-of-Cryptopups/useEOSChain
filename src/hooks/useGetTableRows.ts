import useSWR from 'swr'
import urljoin from 'url-join'
import { useEOS } from '../component/provider'
import chainFetcher from '../lib/fetcher'
import { FetchTableRowsResponseProps, TableRowsProps } from '../typings/rpc'

/**
 * Fetches the rows from the specified table.
 *
 * @param props `get_table_rows` props
 * @param endpoint RPC Endpoint api.
 * @returns T
 */
const useGetTableRows = <T>(
  props?: TableRowsProps,
  endpoint?: string
): FetchTableRowsResponseProps<T> | null | undefined => {
  if (props == null) return

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
    ...props
  }

  const { data } = useSWR<FetchTableRowsResponseProps<T>>(
    urljoin(endpoint, '/v1/chain/get_table_rows'),
    async (url) => await chainFetcher(url, body)
  )

  return data
}

export default useGetTableRows
