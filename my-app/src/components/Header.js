import { Link } from 'react-router-dom';
import mainLogo from  '../assets/mainLogo.png';

function Header () {
  
 return ( 
    <div className='headerD'>
    <Link to="/">
     <img className='logo' src={mainLogo} alt="Home"/>
   </Link>
   <Link to="/favorites"><div className='favo' >Favorites</div></Link></div>
 )

}
export default Header;