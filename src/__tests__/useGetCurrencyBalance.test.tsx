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

    expect(result.current != null) // check if null
    expect((result.current?.length ?? 0) === 1) // should only be one since limit is defined

    if (result.current != null) {
      expect(result.current[0].endsWith('WAX'))
    }
  })
})
