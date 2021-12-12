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

    expect(result.current != null) // check if null
    expect(result.current?.account_name === 'eosio') // should only be one since limit is defined
  })
})
