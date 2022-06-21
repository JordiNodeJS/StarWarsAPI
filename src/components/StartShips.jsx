import { useState } from "react"

const StartShips = () => {
    const [starShips, setStarShips] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)


    const fetchStarShips = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
            const data = await response.json()
            console.log(data.results);
            setStarShips(data.results)
            setLoading(false)
        } catch (error) {
            console.log('error', error);
            setError(error)
            setLoading(false)
        }
    }


    return (
        <div>
            <h1>Start Ships</h1>
            <button onClick={ () =>{
                fetchStarShips()
                setPage(page + 1)
            }}>Fetch Star Ships</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && starShips && starShips.map(starShip => <p key={starShip.name}>Starship name: {starShip.name}</p>)}
            {!loading && !error && <div>pages: {page} </div>}
        </div>
    )
}

export default StartShips