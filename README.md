# useEOSChain

Fetch data from EOS Chain API using React hooks.

This wraps [`useSWR`](https://swr.vercel.app) to fetch requests to the chain api.

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
    'https://waxtestnet.greymass.com'
  )

  return <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{data[0]}</div>
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

  return <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{data[0]}</div>
}
```

## Why this library?

It makes eosio chain request data fetching in React easier, comfortable and easy to use. Real-time changes are handled nicely and smooth. Yeah that's it...

##

**&copy; 2021 | World of Cryptopups | TheBoringDude**
