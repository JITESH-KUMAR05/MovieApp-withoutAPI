import Logo from "../assets/logo.svg";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import data from "../data";

function Nav() {
  let navigate = useNavigate();
  let movieInput = useRef();
  function searchHandler() {
    let querry = movieInput.current.value;
    let moviedettail = data.find((movie) => {
      return (movie.name.toLowerCase() == querry || movie.name.toUpperCase() == querry || movie.name == querry);
    });
    if(moviedettail){
      navigate(`/details/${moviedettail.slug}`)

    }

    else{
      alert("Movie not found")
      navigate("/");
    }

  }




  return (
    <nav className="flex justify-between p-4 w-[70vw] mx-auto ">
      <img src={Logo} alt="" />

      <div className="w-[40%]  relative ">
        <input
        ref={movieInput}
          type="text"
          placeholder="search for movie"
          className="flex w-full h-10 px-3 py-2 text-sm text-black bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button onClick={searchHandler} className="text-black w-[2rem] absolute right-0 top-3 z-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
