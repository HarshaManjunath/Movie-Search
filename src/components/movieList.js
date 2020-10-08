import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"

import MovieDetails from './movieDetails';


function MovieList() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [inputValue, setInputValue] = useState('')

    function useEffects() {
        // console.log(`input value ${inputValue}`)
        axios.get(`http://www.omdbapi.com/?t=${inputValue}&apikey=7c053e0c`)
            .then((response) => {
                const data = response.data
                // console.log(data)
                setTitle(data.Title)
                setMovies(data)
            })


    }
    return (
        <div>
            <h1>Movie Search</h1>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={useEffects}>search</button><br />
            <Link to={{
                pathname: '/moviedetails',
                movieDetails: movies
            }} >{title}</Link>
            {/* <MovieDetails data={movies} /> */}

        </div >
    )
}
export default MovieList
