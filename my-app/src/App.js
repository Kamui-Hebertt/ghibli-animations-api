import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import FilmContext from './context/FilmContent';
import { Switch ,Route } from 'react-router-dom';



function App() {

  const [ inicialMovies , setResponse ] = useState([]);
  const [ InicialFavorite, setFavorite ]= useState([]);

  useEffect(()=> {
    
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {
      setResponse(data);
      //  console.log(data);
    
    })
    },[]);

  const settingF = (elementId) => {
    const DiferentItem = inicialMovies.some((element)=> element.id !== elementId);
     console.log(DiferentItem)

   //  console.log(setFavorite)
  }


  const contextObj = {
    inicialMovies, InicialFavorite, settingF,
  }

  return (
    
    <FilmContext.Provider value={ contextObj }>
    <Switch>
      
      <Route exact path="/" component={ Home } />
      <Route path="/favorites" component={ Favorites } />
    </Switch>
  </FilmContext.Provider>
    
  );
}

export default App;
