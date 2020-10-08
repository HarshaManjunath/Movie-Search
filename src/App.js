import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MovieList from './components/movieList'
import MovieDetails from './components/movieDetails'
function App(props) {
    return (
        <BrowserRouter>
            <div>
                <center><h1>Welcome To Movies List App</h1></center>
                <Link to="/movies">MoviesList</Link>|
                <Route path="/movies" component={MovieList} exact={true} />
                <Route path="/moviedetails" component={MovieDetails} exact={true} />
            </div>
        </BrowserRouter>
    )

}
export default App
//7c053e0c