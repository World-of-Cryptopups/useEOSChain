import { useGetTableRows } from '@cryptopuppie/useeoschain'

interface GETRAM {
  base: RAMSUPPLYBASE
  quote: RAMSUPPLYBASE
}

interface RAMSUPPLYBASE {
  balance: string
  weight: string
}

export default function GetChainComponent() {
  const { data } = useGetTableRows<GETRAM>(
    {
      code: 'eosio',
      scope: 'eosio',
      table: 'rammarket'
    },
    'https://waxtestnet.greymass.com'
  )

  return (
    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
      {JSON.stringify(data)}
    </div>
  )
}
