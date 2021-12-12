import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

const CustomWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
      {children}
    </SWRConfig>
  )
}

export default CustomWrapper
