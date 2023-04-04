import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { 
  Routes,
  Route, 
} from 'react-router-dom';

import Home from './components/Home/Home'
import Car from './components/Car/Car'
import Team from './components/Team/Team.js';
import Gallery from './components/Gallery/Gallery'
import Sponsers from './components/Sponsers/Sponsers'
import About from './components/About/About'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car' element={<Car/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/sponsers' element={<Sponsers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
