import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${fetchUrl}`).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        ></MdChevronLeft>
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => {
            return <Movie key={id} movie={movie}></Movie>;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        ></MdChevronRight>
      </div>
    </>
  );
};

export default Row;
