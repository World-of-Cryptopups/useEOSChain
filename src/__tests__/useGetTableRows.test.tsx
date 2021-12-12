import { renderHook } from '@testing-library/react-hooks'
import { useGetTableRows } from '..'
import CustomWrapper from './wrapper'

describe('useGetTableRows', () => {
  it('should fetch eos producer tables', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetTableRows(
          {
            code: 'eosio',
            scope: 'eosio',
            table: 'producers',
            limit: 1
          },
          'https://waxtestnet.greymass.com'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current != null) // check if null
    expect((result.current?.rows.length ?? 0) === 1) // should only be one since limit is defined
  })
})
