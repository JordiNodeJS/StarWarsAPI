import { useContext } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'

const useContextStarWars = _ => useContext(ContextStarWars)

export default useContextStarWars