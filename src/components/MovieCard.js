import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const {
    original_title,
    overview,
    poster_path,
    vote_average,
    release_date,
    popularity,
  } = movie;
  const handleMouseOut = () => {
    setIsMouseOver(false);
  };
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url(" + `https://image.tmdb.org/t/p/w500/${poster_path}` + ")",
      }}
      className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex flex-col justify-between m-1 p-4 border-[1px] border-blue-200 rounded-md w-96 bg-gray-100 h-[400px] text-white"
    >
      <div className="flex justify-between">
        <p className="bg-black bg-opacity-30 p-1 rounded-md">
          {original_title}
        </p>
        <p className="bg-black bg-opacity-30 p-1 rounded-md">{vote_average}</p>
      </div>

      <div>
        {isMouseOver && (
          <p className="transition ease-in-out hover:-translate-y-1 duration-1000 text-md text-black bg-white bg-opacity-75 p-2 overflow-auto max-h-[300px]">
            {overview ? overview : "Aciklama bulunamadi."}
          </p>
        )}
        <div className="flex justify-between">
          <p>{release_date}</p>
          <p>{popularity}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
