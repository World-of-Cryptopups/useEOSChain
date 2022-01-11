import { renderHook } from '@testing-library/react-hooks'
import useGetInfo from '../hooks/useGetInfo'
import CustomWrapper from './wrapper'

describe('useGetInfo', () => {
  it('should get the info of the eosio endpoint api', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetInfo('https://waxtestnet.greymass.com'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
    expect(result.current.data?.head_block_producer === 'eosdacserver') // should only be one since limit is defined
  })
})
