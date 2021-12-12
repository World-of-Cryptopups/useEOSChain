export interface FetchTableRowsResponseProps<T = unknown> {
  rows: T[]
  more: boolean
  next_key: string
  next_key_bytes: string
}

export interface FetchAccountResponseProps {
  account_name: string
  head_block_num: number
  head_block_time: string
  privileged: boolean
  last_code_update: string
  created: string
  core_liquid_balance?: string
  ram_quota: number
  net_weight: number
  cpu_weight: number
  net_limit: AccountResourceInfo
  cpu_limit: AccountResourceInfo
  ram_usage: number
  permissions: Permission[]
  total_resources: ResourceOverview | null
  self_delegated_bandwidth: ResourceDelegation | null
  refund_request: RefundRequest | null
  voter_info: unknown
  rex_info: unknown
}

export interface Permission {
  perm_name: string
  parent: string
  required_auth: Authority
}

export interface AccountResourceInfo {
  used: number
  available: number
  max: number
  last_usage_update_time?: string
  current_used?: number
}

export interface ResourceOverview {
  owner: string
  ram_bytes: number
  net_weight: string
  cpu_weight: string
}

export interface ResourceDelegation {
  from: string
  to: string
  net_weight: string
  cpu_weight: string
}

export interface RefundRequest {
  owner: string
  request_time: string
  net_amount: string
  cpu_amount: string
}

export interface Authority {
  threshold: number
  keys: KeyWeight[]
  accounts: PermissionLevelWeight[]
  waits: WaitWeight[]
}

export interface PermissionLevelWeight {
  permission: PermissionLevel
  weight: number
}

export interface KeyWeight {
  key: string
  weight: number
}

export interface PermissionLevel {
  actor: string
  permission: string
}

export interface WaitWeight {
  wait_sec: number
  weight: number
}
