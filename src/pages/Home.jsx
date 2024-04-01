function Home(data) {
  return (
    <div className=" w-[20vw] h-[40vh] overflow-hidden cursor-pointer border-gray-400 border p-3 rounded-lg mx-auto mt-4 ">
        <img className=" w-full h-[70%] " src={data.image} alt="" />
        <h1 className=" font-bold ">{data.title}</h1>
        <p> {data.desc} </p>


    </div>
  );
}

export default Home;