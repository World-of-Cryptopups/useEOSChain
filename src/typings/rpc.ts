export type KeyTypeProps = 'name' | 'i64'

export interface TableRowsProps {
  json?: boolean
  code: string
  table: string
  scope: string
  index_position?: number
  key_type?: KeyTypeProps | string
  lower_bound?: string
  upper_bound?: string
  limit?: number
  reverse?: boolean
  show_payer?: boolean
}

export interface FetchTableRowsResponseProps<T = unknown> {
  rows: T[]
  more: boolean
  next_key: string
  next_key_bytes: string
}

export interface CurrencyBalanceProps {
  code: string
  account: string
  symbol?: string
}
