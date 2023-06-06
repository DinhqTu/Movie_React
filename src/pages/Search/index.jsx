import { useState } from "react";
import MovieCard from "../../components/MovieCard";

function Search() {
    const [movies , setMovies] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E4ZWI3MDhiZTEwMWNjYzE5OTk4MGZmZTdiODE1OSIsInN1YiI6IjY0NjUwYzQwNDRhNDI0MDBlNGI4NTA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FRdHQVVuVfqQl6BFA1SWgbKLh5DyRzEec12zAfmUHwk'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=vi-VN&page=1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));

    return <div className="p-12">
        <div className="max-w-[1344px] mx-auto  ">
            <input type="text" className="focus:border-[#428bca] focus:shadow-boxShadow w-full h-[50px] outline-none px-[18px] text-xl mb-4 text-black rounded" placeholder="Nhập tên phim..." />
            <section className="grid grid-cols-5 gap-[16px] ">
                {movies.map((movie,index)=> (
                    <MovieCard key={index} image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} nameEn={movie.original_title} nameVi={movie.title}/>
                ))}
            </section>
        </div>
    </div> ;
}

export default Search;