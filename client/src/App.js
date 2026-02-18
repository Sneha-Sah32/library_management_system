
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import {Routes,Route,Link } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Pricing from './screens/Pricing';
import Start from './screens/Start';
import Login from './screens/Login';
import Book from './screens/Book';
import Profile from './screens/Profile';
import AboutUs from './screens/AboutUs';
import Dashboard from './screens/Dashboard';





function App() {

  // useEffect(()=>{
  //   fetch("http://localhost:5000/api/")
  // })

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/pricing' element={<Pricing/>}/>
        <Route exact path='/start' element={<Start/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/book' element={<Book/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
        <Route exact path='/dash' element={<Dashboard/>}/>
      </Routes>
    </div>

  );
}

export default App;
