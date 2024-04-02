
import { Navigate, useNavigate } from "react-router-dom";

import Home from "../pages/Home";
function Thumbnail(data) {
    let navigate = useNavigate();
    function moviedetailsHandler(){
        navigate(`/details/${data.Id}`)
    }
    
  return (
    <div className=" w-[20vw] h-[40vh] overflow-hidden cursor-pointer border-gray-400 border p-3 rounded-lg mx-auto mt-4 ">
      <img onClick={moviedetailsHandler} className=" w-full h-[70%] " src={data.image} alt="" />
      <h1 className=" text-[1.2rem] font-bold ">{data.title}</h1>
      <p className=" text-gray-400 "> {data.desc} </p>
    </div>
  );
}

export default Thumbnail;
