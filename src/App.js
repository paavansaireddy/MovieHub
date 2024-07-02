import {useEffect, useState} from "react";
import MovieCard from "./MovieCard"
import './App.css'
import SearchIcon from './search.svg'

//c3b8aa7c
const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=c3b8aa7c"

const App = () =>{
    const [moviess, setMoviess]=useState([])
    const [searching, setSearching]=useState(" ")
    const Movies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMoviess(data.Search);
    }
    useEffect(() =>{
        Movies('spiderman');
    },[]);
    return (
        <div className="app">
            <h1> MovieHub</h1>
            <div className="search">
                <input placeholder="Search by movies" value={searching} onChange={(e)=>setSearching(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={()=>Movies(searching)}/>
            </div>
            {moviess?.length>0 ? (
                <div className="container">
                    {
                        moviess.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))
                    }
        
                </div>
                ):(
                    <div className="empty">
                        <h2> Not found </h2>
                    </div>
                )
            }
        </div>
    )
}
export default App;