import { Routes, Route } from 'react-router-dom'
import StarShips from '../components/StarShips'
import StarShip from '../components/StarShip'
import NavBar from './NavBar'
import NotFound from './NotFound'
import ContextStarWarsProvider from './ContextStarWarsProvider'

const navbarLinks = {
  "links": [
    {
      "link": "/home",
      "label": "Home"
    },
    {
      "link": "/starships",
      "label": "StarShips"
    }

  ]
}
const Home = () => <h1>Home</h1>
const Welcome = () => <h1>Welcome</h1>

const Router = () => {

  return (
    <ContextStarWarsProvider>
        <NavBar {...navbarLinks} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="starships" element={<StarShips />} />
          <Route path='starships/:id' element={<StarShip />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      
    </ContextStarWarsProvider>
  )
}
export default Router
