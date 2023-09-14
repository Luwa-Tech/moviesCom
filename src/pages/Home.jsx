// import axios from "axios"
import { NavLink } from "react-router-dom"
import logo from "../assets/tv.png"
import { CiSearch } from "react-icons/ci"
import {HiBars3CenterLeft } from "react-icons/hi2"
import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import axios from "axios"

import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube} from "react-icons/ai"
import {PiSpinnerGapThin} from "react-icons/pi"

const Home = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const topRated = movies.filter((movie, index) => index < 10)
    

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1d35541573902b7260a788e28e9dfe98")
            
            setMovies(response.data.results)
          
        }catch(err) {
          console.log(err)
          setError(true)
        } finally {
            setLoading(false)
        }
      }
      

    useEffect(() => {
        fetchData()
    }, [])

    if (error) {
        return (
        <h1>There was an error when fetching movies</h1>
        )
    }

    if (loading) {
        return (
            <PiSpinnerGapThin className="w-[7rem] my-[7rem] mx-auto"/>
        )
    }

    return (
        <main>
            <header className="bg-[url('../../images/Poster.png')]">
                <nav className="flex items-center justify-between py-4 md:w-[80%] md:mx-auto">
                    <div className="flex items-center gap-4">
                        <img src={logo}/>
                        <h2 className="text-[1.5rem] font-bold text-[#FFF] leading-[1.5rem]">MovieBox</h2>
                    </div>
                    <div  className="flex items-center justify-between px-[0.2rem] md:py-[.2rem] cursor-pointer md:column md:items-center gap-8 border-2 rounded-[5px] w-[40%]">
                        <input className="text-[.88rem] w-[100%] leading-[1.125rem] md:py-1 py-2 bg-transparent px-[.75rem]" type="text" placeholder="What do you want to watch?" />
                        <CiSearch  className="w-[1.4rem] h-[1.4rem] md:w-[1.1rem] text-[#FFF] md:h-[1.1rem]"/>
                    </div>

                    <div className="flex gap-4 items-center">
                        <NavLink className="text-[1rem] font-bold leading-[1.5rem] text-[#FFF]">Sign in</NavLink>
                        <div className="bg-[#BE123C] px-[.5rem] py-[.3rem] rounded-[1.1rem]">
                            <HiBars3CenterLeft className="w-[1.6rem] h-[1.6rem] text-[#FFF]"/>
                        </div>
                    </div>
                </nav>

                <section className="mt-[4rem] md:w-[80%] md:mx-auto">
                    <div className="w-[50%]">
                        <h1 className="text-[3rem] font-bold leading-[3.5rem] text-[#FFF]">John Wick 3: Parabellum</h1>
                        <p className="text-[0.875rem] font-medium leading-[1.125rem] text-[#FFF] w-[55%]">John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                        <button className="px-2 py-2 bg-[#BE123C] text-[#FFF] uppercase rounded-[.3rem] hover:bg-opacity-[0.7] mb-[6rem] mt-[.5rem]">Watch Trailer</button>
                    </div>
                </section>
            </header>

            <section className=" my-10 md:w-[80%] md:mx-auto">
                <h1 className="mb-[1.2rem] text-[#000] text-[2.2rem] font-bold leading-normal">Top 10 Movies</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[8rem]">
                {
                    topRated.map(items => 
                    <MovieCard key={items.id} 
                    movie_id={items.id}
                    poster={items.poster_path}
                    title={items.title}
                    release_date={items.release_date}
                    />
                    )
                }
                </div>

            </section>

            <section className=" mt-[9rem] mb-2 md:w-[40%] md:mx-auto">
                <div className="flex justify-between mb-6 md:w-[30%] md:mx-auto items-center">
                    <FaFacebookF />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                    <AiFillYoutube />
                </div>

                <div className="flex justify-between mb-6 items-center text-[#111827]">
                    <p className="text-[1.125rem] font-bold leading-normal">Conditions of Use</p>
                    <p className="text-[1.125rem] font-bold leading-normal">Privacy & Policy</p>
                    <p className="text-[1.125rem] font-bold leading-normal">Press Room</p>
                </div>

                <p className="text-[#6B7280] text-[1.125rem] font-bold leading-normal text-center">2023 MoviesCom by umar faruq</p>
            </section>

        </main>
    )
}

export default Home