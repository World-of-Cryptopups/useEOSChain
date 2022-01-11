import { renderHook } from '@testing-library/react-hooks'
import { useGetCurrencyBalance } from '..'
import CustomWrapper from './wrapper'

describe('useGetCurrencyBalance', () => {
  it('should get eosio currency balance', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetCurrencyBalance(
          {
            code: 'eosio.token',
            account: 'eosio'
          },
          'https://waxtestnet.greymass.com'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
    expect((result.current.data?.length ?? 0) === 1) // should only be one since limit is defined

    if (result.current != null) {
      const data = result.current.data

      expect((data != null ? data : [''])[0].endsWith('WAX'))
    }
  })

  it('should fail to get currency balance of an unknown acc', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetCurrencyBalance(
          {
            code: 'eosio.token',
            account: 'eosio'
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
