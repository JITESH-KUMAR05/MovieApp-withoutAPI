import data from "../data";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { Navigate } from "react-router-dom";

function Details() {
  let { movieId } = useParams();
  let navigate = useNavigate();

  let movieDetails = data.find((movie) => {
    return movie.id == movieId;

  })

  function GobackHandler() {
    navigate("/")
  }

  return (
    <div>
      <div className="m-full overflow-hidden relative  z-10 h-[100vh] ">
        <button onClick={GobackHandler} className="absolute top-0 right-0 z-20" >Back to Home</button>
        <div className="absolute bottom-52 p-5 z-20 w-[35vw]">
        <h1 className="  text-4xl font-extrabold " > {movieDetails.name} </h1>
        <h1 className=" w-[20rem]  text-gray-400 p-2  text-lg " > {movieDetails.plot   } </h1>
        </div>
        <ReactPlayer
        width={"100%"}
        height={"85vh"}
        className="w-[100vw] scale-150 absolute object-cover   "
          playing
          muted
          url={movieDetails.youtube_trailer}
        />
      </div>
    </div>
  );
}

export default Details;
