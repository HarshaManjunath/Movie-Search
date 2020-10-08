import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function MovieDetails({ location, }) {
    const [data, setData] = useState([])
    const id = location.movieDetails && location.movieDetails.imdbID
    console.log(id)
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?&apikey=7c053e0c&i=${id}`)
            .then((response) => {
                const data = response.data
                setData(data)
            })
    }, [])
    console.log(data, "Movies Detals page")
    return (
        <div>
            <h1>Movie Details</h1>
            <h1>Title of the movie {data.Title}</h1>
            <h1>Year {data.Year}</h1>
            <h1>Rated {data.Rated}</h1>
            <h1>Released {data.Released}</h1>
            <Link to={'/movies'}>Go To Movie List Page</Link>
        </div>
    )

}
export default MovieDetails
//{"Title":"Captain Marvel","Year":"2019","Rated":"PG-13","Released":"08 Mar 2019"
