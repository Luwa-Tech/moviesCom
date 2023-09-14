import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import logo from "../assets/tv.png"
import home from "../assets/Home.png"
import movie from "../assets/Movie Projector.png"
import calendar from "../assets/Calendar.png"
import logout from "../assets/Logout.png"
import tvShow from "../assets/TV Show.png"


const MovieDetail = () => {
    const params = useParams()
    const [movieDetails, setMovieDetails] = useState({})

    const date = movieDetails?.release_date
    const releaseDateInUTC = Date.parse(date)

    const fetchMovieDetails = async () => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1d35541573902b7260a788e28e9dfe98`)

            setMovieDetails(response.data)
        }catch(err) {
            //error handling
            console.log(err)
        }
    }

    useEffect( () => {
        fetchMovieDetails()
    }, [])

    console.log(movieDetails)
    return (
        <main className="flex gap-[3rem] py-4">
            <section className="md:w-[16rem] border-2 rounded-r-[4rem] py-4"> 
                
                <div className="flex px-2 items-center gap-4 mb-[6rem]">
                        <img className="w-[2rem]" src={logo}/>
                        <h2 className="text-[1.1rem] font-bold leading-[1.5rem]">MovieBox</h2>
                </div>
                
                <nav className="flex flex-col items-left gap-[8rem] ">
                   <ul className="flex flex-col items-left gap-4">
                        <li className="hover:border-r-4 py-4 hover:bg-[#be123c1a] hover:bg-opacity-[0.6] border-r-[#BE123C] hover:text-[#BE123C]">
                            <div className="flex items-left gap-2 px-6 w-full ">
                                <img className="w-[1.4rem]" src={home} alt="home"/>
                                <p className="text-[1rem] font-bold leading-normal  text-[#666]">Home</p>
                            </div>
                        </li>
                        <li className="hover:border-r-4 py-4 hover:bg-[#be123c1a] hover:bg-opacity-[0.6] border-r-[#BE123C] hover:text-[#BE123C]">
                            <div className="flex items-left gap-2 px-6 w-full">
                                <img className="w-[1.2rem]" src={movie} alt="movie"/>
                                <span className="text-[1rem] font-bold leading-normal text-[#666]">Movies</span>
                            </div>
                        </li>
                        <li className="hover:border-r-4 py-4 hover:bg-[#be123c1a] hover:bg-opacity-[0.6] border-r-[#BE123C] hover:text-[#BE123C]">
                            <div className="flex items-left gap-2 px-6 w-full">
                                <img src={tvShow} alt="show"/>
                                <span className="text-[1rem] font-bold leading-normal text-[#666]">Tv Series</span>
                            </div>
                        </li>
                        <li className="hover:border-r-4 py-4 hover:bg-[#be123c1a] hover:bg-opacity-[0.6] border-r-[#BE123C] hover:text-[#BE123C]">
                            <div className="flex items-left gap-2 px-6 w-full">
                                <img className="w-[1.4rem]" src={calendar} alt="calendar"/>
                                <span className="text-[1rem] font-bold leading-normal text-[#666]">Upcoming</span>
                            </div>
                        </li>          
                   </ul>

                   <ul>
                        <li className="cursor-pointer">
                            <div className="flex items-left gap-2 px-6 w-full">
                                <img className="w-[1.5rem]" src={logout} alt="logout"/>
                                <span className="text-[1rem] font-bold leading-normal text-[#666]">Log out</span>
                            </div>
                        </li>  
                   </ul>
                </nav> 
            </section>

            <section className="">
                <img className="w-[15rem] mb-4"  src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt="movie poster"/>
                <div className="flex gap-4 items-center">
                    <p data-testid="movie-title" className="text-[1rem] font-bold leading-normal  text-[#666]">{movieDetails?.title}</p>
                    <span className="text-[1.2rem]">:</span>
                    <p data-testid="movie-release-date" className="text-[1rem] font-bold leading-normal  text-[#666]">{releaseDateInUTC}</p>
                    <span className="text-[1.2rem]">:</span>
                    <p data-testid="movie-runtime" className="text-[1rem] font-bold leading-normal  text-[#666]">{movieDetails?.runtime}</p>
                </div>
                <p data-testid="movie-runtime" className="text-[1rem] leading-normal w-[50%] mt-2 text-[#666]">{movieDetails?.overview}</p>
            </section>
        </main>
    )
}

export default MovieDetail