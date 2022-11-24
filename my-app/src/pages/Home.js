import React, { useContext } from "react";
import FilmContext from "../context/FilmContent";
import Header from "../components/Header";
// import Favorites from "./Favorites";

export default function Home() {
  const { inicialMovies, settingF }  = useContext(FilmContext)
  //  console.log(inicialMovies)
    return (
  <div>
    <Header />
    <div className="films">
    <h2 className="filmsP">Films</h2>
    </div>
    <main className="main">
    {inicialMovies.map((element,i)=> (
    <div className="allMovies"><h3 key={i}>{element.title}</h3>
    <img alt={element.title} src={element.image} />
    <p>{element.description}</p>
    <button type="button" onClick={() =>settingF(element.id)}>Add</button></div>
      ))}
       </main>
    </div>
   
    );
  }