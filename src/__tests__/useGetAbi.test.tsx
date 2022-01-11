import { renderHook } from '@testing-library/react-hooks'
import useGetABI from '../hooks/useGetAbi'
import CustomWrapper from './wrapper'

describe('useGetABI', () => {
  it('should get the abi of eosio account', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetABI(
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

  it('should fail to get the abi of an account', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetABI(
          {
            account_name: 'eosioxxxx'
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
