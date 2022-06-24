import { useState, createContext } from 'react'

export const ContextStarWars = createContext()

export default function ContextStarWarsProvider({ children }) {
  const [starShips, setStarShips] = useState(null)
  const [url, setUrl] = useState(null)
  const [page, setPage] = useState(1)
  return (
    <ContextStarWars.Provider
      value={{starShips, setStarShips, url, setUrl, page, setPage}}>
      {children}
    </ContextStarWars.Provider>
  )
}
