import React, { useContext } from "react";
import FilmContext from "../context/FilmContent";
import Header from "../components/Header";
import Favorites from "./Favorites";

export default function Home() {
  const { inicialMovies, settingF }  = useContext(FilmContext)
  //  console.log(inicialMovies)
    return (
  <div>
    <Header />
    <Favorites />
    {inicialMovies.map((element,i)=> (
    <><h2 key={i}>{element.title}</h2>
    <img alt={element.title} src={element.image} />
    <p>{element.description}</p>
    <button type="button" onClick={settingF(element.id)}>Add</button></>
      ))}
    </div>
    );
  }