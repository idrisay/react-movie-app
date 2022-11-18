import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=___APP_KEY___&language=tr-TR";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results)
        setMovieList(json.results)});
  }, []);

  return (
    <div className="bg-gray-300">
      <p className="text-center p-2 text-4xl">Isabella Movies</p>
      <div>
        {/* {movieList.map((item) => (
          <div
            key={item.id}
            className={
              item.completed ? "line-through text-red-400" : "text-green-400"
            }
          >
            <p>
              <span>{item.id}</span>. <span>{item.title}</span>
            </p>
          </div>
        ))} */}
      </div>
      <div className="flex justify-center flex-wrap max-w-7xl mx-auto">
        {
          movieList.map((item) => {
            return (
              <MovieCard key={item.id} movie={item}/>
            )
          })
        }
        {/* <MovieCard /> 
        <MovieCard />
        <MovieCard /> */}
      </div>
    </div>
  );
}

export default App;

// https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg