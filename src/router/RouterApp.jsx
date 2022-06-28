import { Routes, Route } from 'react-router-dom'
import StarShips from '../components/StarShips'
import StarShip from '../components/StarShip'
import NavBar from './NavBar'
import NotFound from './NotFound'
import ContextStarWarsProvider from './ContextStarWarsProvider'
import GlobalFontFace from '../components/GlobalFontFace'
import GlobalCustomStyles from '../components/GlobalCustomStyles'
import Logo from '../components/Logo'

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

const Home = () => [<h1 key={1}>Home</h1>, <h2 key={2}>My Sweet Home</h2>]
const Welcome = () => <h1>Welcome</h1>

const Router = () => {

  return (
    <ContextStarWarsProvider>
      <GlobalFontFace />
      <GlobalCustomStyles />
        <NavBar {...navbarLinks} />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="home" element={<Home />} />
          <Route path="starships" element={<StarShips />} />
          <Route path='starships/:id' element={<StarShip />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      
    </ContextStarWarsProvider>
  )
}
export default Router
