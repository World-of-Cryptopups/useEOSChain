import { createContext, ReactNode, useContext } from 'react'

interface UseEOSProviderProps {
  children: ReactNode
  endpoint?: string
}
interface UseEOSContextProps {
  endpoint?: string
}

const UseEOSContext = createContext<UseEOSContextProps>({})

const UseEOSProvider = ({ children, endpoint }: UseEOSProviderProps) => {
  return (
    <UseEOSContext.Provider value={{ endpoint }}>
      {children}
    </UseEOSContext.Provider>
  )
}

const useEOS = () => {
  return useContext(UseEOSContext)
}

export default UseEOSProvider
export { useEOS }
