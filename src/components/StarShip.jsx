import { useParams } from 'react-router-dom'

const StarShip = () => {
    const { id } = useParams()
    return <h1>StarShip {id}</h1>
}

export default StarShip