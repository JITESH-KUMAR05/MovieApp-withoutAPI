import data from '../data'
import Nav from '../components/Nav';
import Thumbnail from '../components/Thumbnail';
function Home() {
  return (
    <>
    <Nav />
    <h1 className=' text-center text-[2rem] font-bold p-5 '>JK KA Cinema Hall</h1>
    <div className='flex w-[90vw] m-auto flex-wrap p-4 items-center justify-between gap-4'>
    {
      data.map((movie)=>{
        return <Thumbnail title={movie.name} slug={movie.slug} Id={movie.id} desc={movie.plot} image = {movie.poster} />
      })
    }
    </div>
    </>
  );
}

export default Home;