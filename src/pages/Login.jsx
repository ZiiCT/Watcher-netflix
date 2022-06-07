import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/images/massive-b-horror-collage-wallpaper-horror-movies-29491579-2560-16005.jpg";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      {" "}
      <div className="w-full h-screen">
        bgImg
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={bgImg}
          alt="Background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-width-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Log In</h1>
              {error ? <p className="p-3 text-red-300">{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-900 rounded"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-900 rounded"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-green-900 py-3 my-6 rounded font-bold">
                  Log In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2 " type="checkbox" name="" id="" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New ? </span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
