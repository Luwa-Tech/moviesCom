import { NavLink } from "react-router-dom"
// import axios from "axios"
// import { useState, useEffect } from "react"

const MovieCard = (props) => {

    return (
        <div data-testid="movie-card" className="w-[18rem] h-[15rem] md:w-[11rem] ">
                        <NavLink to={props.movie_id}>
                            <div className="flex items-center justify-center"> 
                            <img className="w-[18rem] h-[15rem]" src={`https://image.tmdb.org/t/p/w500/${props.poster}`} data-testid="movie-poster"   alt="product image" />
                            </div>
                            <div className="flex flex-col ">
                                <p data-testid="movie-title">{props.title}</p>
                                <p data-testid="movie-release-date">{props.release_date}</p>
                            </div>
                        </NavLink>
        </div>
    )
}

export default MovieCard