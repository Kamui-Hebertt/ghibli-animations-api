
import FilmContext from "../context/FilmContent";
import { useContext } from "react";
import Header from "../components/Header";

 function Favorites() {
const {InicialFavorite }  = useContext(FilmContext)
  // console.log(localStorage.getItem('movie'))
   console.log(InicialFavorite)
    return (
      <div>
      <Header />
      <div className="films2">
    <h2 className="filmsP2">Favorites</h2>
        </div>
        <main className="main2">
      {InicialFavorite.map((e)=> (<div className="allMovies2"><h3 key={e}>{e.title}</h3>
      <img  src={e.image} alt={e.title} />
      <p>{e.description}</p></div>))}
      </main>
      </div>

      )
     
  }

  export default Favorites;