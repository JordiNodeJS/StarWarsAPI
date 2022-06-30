import { useState, createContext } from 'react'

export const ContextStarWars = createContext()

export default function ContextStarWarsProvider({ children }) {

  const [url, setUrl] = useState(null)
  const [page, setPage] = useState(1)
  const [auth, setAuth] = useState(true)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <ContextStarWars.Provider
      value={{
        url,
        setUrl,
        page,
        setPage,
        error,
        setError,
        loading,
        setLoading,
        auth,
        setAuth
      }}>
      {children}
    </ContextStarWars.Provider>
  )
}
