import { useEffect, useState } from "react";
import Controllers from "./components/Controllers";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";


function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)

  const url =
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`;

  useEffect(() => {
    let pg = page;
    getMovies(url, pg);
  }, [page]);

  const getMovies = (fetchUrl, pg) => {
    fetch(`${fetchUrl}&page=${pg}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTotalPage(json.total_pages)
        setMovieList(json.results);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0].value) {
      getMovies(
        `https://api.themoviedb.org/3/search/movie?query=${event.target[0].value}&api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`,
        1
      );
      setSearchKeyword("");
    } else {
      getMovies(url, 1);
    }
    setPage(1)
  };
  const handlePage = (type) => {
    console.log("handlePage", type);
    if(type === 'decrease'){
      setPage(page - 1)
    }else{
      setPage(page + 1)
    }
  };

  return (
    <div className="bg-gray-300">
      <Navbar
        setSearchKeyword={setSearchKeyword}
        searchKeyword={searchKeyword}
        handleSubmit={handleSubmit}
      />
      <div className="flex justify-center flex-wrap max-w-7xl mx-auto pt-20">
        {movieList.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <Controllers page={page} totalPage={totalPage} handlePage={handlePage} />
    </div>
  );
}

export default App;
