
import FilmContext from "../context/FilmContent";
import { useContext } from "react";

 function Favorites() {
const {InicialFavorite }  = useContext(FilmContext)
  // console.log(localStorage.getItem('movie'))
   console.log(InicialFavorite)
    return (
      <div>
      {InicialFavorite.map((e)=> (<><p key={e}>{e.title}</p><img src={e.image} alt={e.title} /><p>{e.description}</p></>))}
      </div>
      )
     
  }

  export default Favorites;