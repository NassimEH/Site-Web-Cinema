const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGM2NDk0ZDU0ODUzMTAwZjk5ZDVmZGY2YmRlM2RkNyIsInN1YiI6IjY1ZjM2MGE2MzU4MThmMDE4OGQxZjA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO19QYj8mCzVS2LX5XY8RIxGfWtiTYnQolsjsJXT6Oc'
  }
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGM2NDk0ZDU0ODUzMTAwZjk5ZDVmZGY2YmRlM2RkNyIsInN1YiI6IjY1ZjM2MGE2MzU4MThmMDE4OGQxZjA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO19QYj8mCzVS2LX5XY8RIxGfWtiTYnQolsjsJXT6Oc'
//   }
// };

// function movie(){
//   const [movieList,setMovieList] = useState([])

//   const getMovie = ()=>{
//   fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US?api_key=34c6494d54853100f99d5fdf6bde3dd7')
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
//   }

//   useEffect(()=>{
//     getMovie()
//   },[])

//   return(
//     <div>
//     {movieList.map(()=> (
//       <img src={'https://image.tmdb.org/t/p/w500${movie.poster_path}'}/>
//     ))}
//     </div>
//   )
// }