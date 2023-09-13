// import axios from "axios"
import { NavLink } from "react-router-dom"
import logo from "../assets/tv.png"
import { CiSearch } from "react-icons/ci"
import {HiBars3CenterLeft } from "react-icons/hi2"

const Home = () => {
    // const fetchdata = async () => {
    //     try {
    //       const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1d35541573902b7260a788e28e9dfe98")
    //       console.log(response)
    //     }catch(err) {
    //       console.log(err)
    //     }
    //   }
    
    return (
        <main>
            <header className="bg-[url('../../images/Poster.png')]">
                <nav className="flex items-center justify-between py-4 md:w-[80%] md:mx-auto">
                    <div className="flex items-center gap-4">
                        <img src={logo}/>
                        <h2 className="text-[1.5rem] font-bold text-[#FFF] leading-[1.5rem]">MovieBox</h2>
                    </div>
                    <div  className="flex items-center justify-between px-[0.2rem] md:py-[.2rem] cursor-pointer md:column md:items-center gap-8 border-2 rounded-[5px]">
                        <input className="text-[.88rem] w-[100%] md:w-auto leading-[1.125rem] md:py-1 py-2 bg-transparent outline-none  px-[.75rem]" type="text" placeholder="What do you want to watch?" />
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
                        <button className="px-2 py-2 bg-[#BE123C] text-[#FFF] uppercase rounded-[.3rem] hover:bg-opacity-[0.7] mb-[4rem] mt-[.5rem]">Watch Trailer</button>
                    </div>
                </section>
            </header>

        </main>
    )
}

export default Home