import { createContext, createElement, ReactNode, useContext } from 'react'

interface UseEOSProviderProps {
  children: ReactNode
  endpoint?: string
}
interface UseEOSContextProps {
  endpoint?: string
}

const UseEOSContext = createContext<UseEOSContextProps>({})

const UseEOSProvider = (props: UseEOSProviderProps) => {
  const { endpoint } = props

  return createElement(UseEOSContext.Provider, {
    ...props,
    value: {
      endpoint
    }
  })
}

const useEOS = () => {
  return useContext(UseEOSContext)
}

export default UseEOSProvider
export { useEOS }
