import { BiCameraMovie } from "react-icons/bi";

const Navbar = ({ handleSubmit, searchKeyword, setSearchKeyword }) => {
  return (
    <div className="fixed top-0 z-10 bg-red-400 w-full bg-opacity-75">
      <div className="flex items-center justify-between p-4">
        <div className="w-1/3">
          <BiCameraMovie className="text-4xl" />
        </div>
        <div className="text-2xl w-1/3 text-center">
          <h1>IMovies</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-1/3">
          {/* <form onSubmit={(e) => handleSubmit(e, 'asdasd')} className="w-1/3"> */}
          <input
            placeholder="Search"
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="p-1 float-right bg-transparent border-[1px] border-blue-400 w-32 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
