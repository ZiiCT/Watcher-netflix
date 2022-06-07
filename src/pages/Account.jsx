import React from "react";
import SavedShows from "../components/SavedShows/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] "></div>
        <div className="absolute top-[25%] p-4 md:p-8">
          <SavedShows></SavedShows>
        </div>
      </div>
    </>
  );
};

export default Account;
