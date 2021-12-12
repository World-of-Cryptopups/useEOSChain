import { renderHook } from '@testing-library/react-hooks'
import { useGetCurrencyBalance, useGetTableRows } from '..'
import useGetAccount from '../hooks/useGetAccount'

const TESTS = [
  {
    title: '(useGetTableRows) should throw error if endpoint is not set',
    props: undefined,
    expected: null,
    hook: useGetTableRows
  },
  {
    title: '(useGetCurrencyBalance) should throw error if endpoint is not set',
    props: undefined,
    expected: null,
    hook: useGetCurrencyBalance
  },
  {
    title: '(useGetAccount) should throw error if endpoint is not set',
    props: undefined,
    expected: null,
    hook: useGetAccount
  }
]

describe('checking endpoint props', () => {
  // run each test
  TESTS.forEach((i) => {
    it(i.title, () => {
      const { result } = renderHook(() => i.hook(i.props))

      expect(result.error).toEqual(Error('RPC Endpoint not set.'))
    })
  })
})
