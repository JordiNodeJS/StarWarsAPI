import { Routes, Route } from 'react-router-dom'
import StarShips from '../pages/StarShips'
import StarShip from '../pages/StarShip'
import NavBar from './NavBar'
import NotFound from './NotFound'
import ContextStarWarsProvider from './ContextStarWarsProvider'
import GlobalFontFace from '../components/GlobalFontFace'
import GlobalCustomStyles from '../components/GlobalCustomStyles'
import PrivateRoutes from '../utils/PrivateRoutes'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Welcome from '../pages/Welcome'
import Register from '../pages/Register'

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


const Router = () => {
  return (
    <ContextStarWarsProvider>
      <GlobalFontFace />
      <GlobalCustomStyles />
      <NavBar {...navbarLinks} />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route element={<PrivateRoutes />}>
          <Route path='home' element={<Home />} />
          <Route path='starships' element={<StarShips />} />
          <Route path='starships/:id' element={<StarShip />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </ContextStarWarsProvider>
  )
}
export default Router
