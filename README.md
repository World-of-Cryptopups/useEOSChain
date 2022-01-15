# useEOSChain

Fetch data from the EOS Chain API using React hooks.

This wraps **[`useSWR`](https://swr.vercel.app)** to fetch requests to the chain api.

## Install

```sh
npm install --save @cryptopuppie/useeoschain
```

## Usage

The hooks are made to mimic the usage of **useSWR**

- Simple

  ```tsx
  import { useGetCurrencyBalance } from '@cryptopuppie/useeoschain'

  export default function App() {
    const { data } = useGetCurrencyBalance(
      { account: 'myeosioaccount', code: 'eosio.token' },
      // if the endpoint is not set (also not set in provider) it will throw an error
      'https://waxtestnet.greymass.com'
    )

    return (
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{data[0]}</div>
    )
  }
  ```

- With a Provider

  ```tsx
  // App.tsx
  import { UseEOSProvider } from '@cryptopuppie/useeoschain'
  import Component from './component.tsx'

  export default function App() {
    return (
      <UseEOSProvider endpoint="https://waxtestnet.greymass.com">
        <Component />
      </UseEOSProvider>
    )
  }
  ```

  ```tsx
  // Component.tsx
  import { useGetCurrencyBalance } from '@cryptopuppie/useeoschain'

  export default function Component() {
    const { data } = useGetCurrencyBalance(
      { account: 'myeosioaccount', code: 'eosio.token' }
      // there is no need set the endpoint since it is set on the provider
      // but you can still set it but it will override the one your provided within the provider
    )

    return (
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{data[0]}</div>
    )
  }
  ```

- Error Handling

  ```tsx
  import { useGetCurrencyBalance } from '@cryptopuppie/useeoschain'

  export default function Component() {
    const { data, error, hasFailed } = useGetCurrencyBalance(
      { account: 'myeosioaccount', code: 'eosio.token' },
      'https://waxtestnet.greymass.com'
    )

    if (hasFailed) {
      // if `hasFailed` is true, the `error` object is not undefined, vice versa
      return <div>{error?.message}</div>
    }

    return (
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{data[0]}</div>
    )
  }
  ```

### Hooks

The following are the currently implemented hooks from the chain api.

- **useGetAbi** -- `/get_abi`
- **useGetAccount** -- `/get_account`
- **useGetCurrencyBalance** -- `/get_currency_balance`
- **useGetInfo** -- `/get_info`
- **useGetTableRows** -- `/get_table_rows`

### Custom chain request

If you want to send request to other chain api endpoints...

```tsx
import { useChainFetcher, GetCodeResult } from '@cryptopuppie/useeoschain'

let endpoint = 'https://waxtestnet.greymass.com'

export default function App() {
  let props = {
    account_name: accountName,
    code_as_wasm: true
  }

  const { data } = useChainFetcher<GetCodeResult>(props, '/v1/chain/get_code', endpoint)

  return <div>{JSON.stringify(data)}</div>
}
```

All of the hooks just wraps over `useChainFetcher`.

## Why this library?

It makes eosio chain request data fetching in React easier, comfortable and easy to use. Real-time changes are handled nicely and smooth. Yeah that's it...

##

**&copy; 2021 | World of Cryptopups | TheBoringDude**
