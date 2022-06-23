import { Routes, Route } from 'react-router-dom'
import StartShips from '../components/StartShips'
import NavBar from './NavBar'

const datalink = {
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
  const Home = () => <h1>Home</h1>
  const Welcome = () => <h1>Welcome</h1>

  return (
    <>
        <NavBar {...datalink} />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="starships" element={<StartShips />}></Route>
        </Routes>
      
    </>
  )
}
export default Router
