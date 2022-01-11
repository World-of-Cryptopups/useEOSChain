import { renderHook } from '@testing-library/react-hooks'
import useGetAccount from '../hooks/useGetAccount'
import CustomWrapper from './wrapper'

describe('useGetAccount', () => {
  it('should get eosio account', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAccount(
          {
            account_name: 'eosio'
          },
          'https://waxtestnet.greymass.com'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
    expect(result.current.data?.account_name === 'eosio') // should only be one since limit is defined
  })

  it('should fail to get an eosio account', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAccount(
          {
            account_name: 'eosioxxxxx'
          },
          'https://waxtestnet.greymass.com'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data == null)
    expect(result.current.hasFailed)
    expect(result.current.error != null)
  })
})
