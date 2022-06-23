import { Routes, Route } from 'react-router-dom'
import StarShips from '../components/StarShips'
import StarShip from '../components/StarShip'
import NavBar from './NavBar'

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
    <>
        <NavBar {...navbarLinks} />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="starships" element={<StarShips />}></Route>
          <Route path='starship/:id' element={<StarShip />}></Route>
        </Routes>
      
    </>
  )
}
export default Router
