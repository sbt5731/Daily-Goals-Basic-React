import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import  Header  from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import User from './Components/User';

function App() {
  return (

    <BrowserRouter>
        <Header />

        <Routes>
          <Route path = "/" element ={<Home />}/>
          <Route path = "/contact" element ={<Contact />}/>
          <Route path = "/about" element ={<About />}/>
          <Route path='/user/:id' element ={<User />}/> 
        </Routes>

         <Footer />
      
    </BrowserRouter>
    
  );
}

export default App;
