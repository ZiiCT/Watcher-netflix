import React, { useState, useEffect } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { AiOutlineClose } from "react-icons/ai";

import { UserAuth } from "../../context/AuthContext";

import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
    return () => {};
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-12">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        ></MdChevronLeft>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => {
            return (
              <div
                key={movie.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/40 opacity-0 hover:opacity-100 text-white">
                  <p
                    className=" whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center
        "
                  >
                    {movie?.title}
                  </p>
                  <p
                    className="absolute text-gray-300 top-4 right-4"
                    onClick={() => deleteShow(movie.id)}
                  >
                    <AiOutlineClose></AiOutlineClose>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        ></MdChevronRight>
      </div>
    </div>
  );
};

export default SavedShows;
