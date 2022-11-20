import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Controllers = ({ handlePage, page, totalPage }) => {
  return (
    <div className="text-5xl z-50 cursor-pointer">
      {page > 1 && (
        <div
          onClick={() => handlePage("decrease")}
          className="fixed top-[45vh]"
        >
          <IoIosArrowBack />
        </div>
      )}
      {
        page < totalPage && 
      <div
        onClick={() => handlePage("increase")}
        className="fixed top-[45vh] right-2"
      >
        <IoIosArrowForward />
      </div>
      }
    </div>
  );
};

export default Controllers;
