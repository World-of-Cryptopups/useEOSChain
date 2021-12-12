import { renderHook } from '@testing-library/react-hooks'
import { useGetCurrencyBalance, useGetTableRows } from '..'
import useGetAccount from '../hooks/useGetAccount'

const TESTS = [
  {
    title: '(useGetTableRows) should return null',
    props: undefined,
    expected: null,
    hook: useGetTableRows
  },
  {
    title: '(useGetCurrencyBalance) should return null',
    props: undefined,
    expected: null,
    hook: useGetCurrencyBalance
  },
  {
    title: '(useGetAccount) should return null',
    props: undefined,
    expected: null,
    hook: useGetAccount
  }
]

describe('checking with null props', () => {
  // run each test
  TESTS.forEach((i) => {
    it(i.title, () => {
      const { result } = renderHook(() =>
        i.hook(i.props, 'https://waxtestnet.greymass.com')
      )

      // eslint-disable-next-line eqeqeq
      expect(result.current == i.expected) // only use == since we want undefined and null to be the same
    })
  })
})
