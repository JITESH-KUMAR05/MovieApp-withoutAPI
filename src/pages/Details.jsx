import data from "../data";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { useState , useRef } from "react";
import Logo from "../assets/logo.svg";

function Details() {
        const [isMuted, setIsMuted] = useState(true);
        const playerRef = useRef(null);
    let { slug } = useParams();
    let navigate = useNavigate();

    let movieDetails = data.find((movie) => {
        return movie.slug == slug;
    });

    function GobackHandler() {
        navigate("/");
    }

    function playerAudioHandler(){
        if(isMuted){
            playerRef.current.getInternalPlayer().unMute();
            setIsMuted(false);
        }else{
            playerRef.current.getInternalPlayer().mute();
            setIsMuted(true);
        }
    }

    return (
        <div>
            <div className="m-full overflow-hidden relative  z-0 h-[100vh] ">
                <div className="absolute top-0 z-10 flex justify-between items-center w-full px-5 ">
                        <img className=" object-contain cursor-pointer  " src={Logo} alt="" />
                    <button
                        onClick={GobackHandler}
                        className=" bg-white text-red-600  p-3 m-3 rounded font-semibold cursor-pointer"
                    >
                        Back to Home
                    </button>
                </div>
                <div className="absolute bottom-52 p-5 z-10 w-[40vw]">
                    <h1 className="  text-4xl font-extrabold "> {movieDetails.name} </h1>
                    <h1 className="   text-gray-400 p-2  text-lg  font-bold">
                        {" "}
                        {movieDetails.plot}{" "}
                    </h1>
                    <button className=" border-none bg-white text-red-600 p-3 rounded-lg font-extrabold ">
                        More Details
                    </button>
                </div>
                <button onClick={playerAudioHandler} className=" absolute bottom-36 text-white z-10 right-0 p-5 "> {isMuted ? 'unmte':'Mute'} </button>
                <div className="absolute w-[100vw] z-0 h-[80vh]  ">
                    <ReactPlayer
                    ref={playerRef}
                        width={"100%"}
                        height={"80vh"}
                        className=" scale-150  object-cover    "
                        playing
                        muted
                        url={movieDetails.youtube_trailer}
                    />
                </div>
            </div>
        </div>
    );
}

export default Details;
