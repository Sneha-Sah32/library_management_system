
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import {Routes,Route,Link } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';



function App() {
  return (

    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </div>

  );
}

export default App;
