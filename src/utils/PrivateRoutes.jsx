import { Outlet, Navigate } from 'react-router-dom'
import useContextStarWars from '../hooks/useContextStarWars'



const PrivateRoutes = () => {
    const {auth} = useContextStarWars()
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes