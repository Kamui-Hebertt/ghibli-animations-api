
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Switch ,Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import FilmContext from './context/FilmContent';



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
     console.log(elementId)
    console.log(inicialMovies)
  const a =  inicialMovies.find((e) => e.id  === elementId)
setFavorite((prev)=>([...prev, a]));

  }

  const contextObj = {
      inicialMovies, InicialFavorite, settingF,
  }
      

  return (
    <FilmContext.Provider value={contextObj}>
    <Switch>
    <Route  exact path="/" component={ Home } />
    <Route path="/favorites" component={ Favorites } />
  </Switch>
  </FilmContext.Provider>
    
  );
}

export default App;
